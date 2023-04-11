import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetStatusActionEnum {
    GetStatus = "GetStatus"
}
export declare enum POSTGetStatusOperationEnum {
    GetStatus = "GetStatus"
}
export declare enum POSTGetStatusVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class POSTGetStatusRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTGetStatusActionEnum;
    operation: POSTGetStatusOperationEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTGetStatusVersionEnum;
}
export declare class POSTGetStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
