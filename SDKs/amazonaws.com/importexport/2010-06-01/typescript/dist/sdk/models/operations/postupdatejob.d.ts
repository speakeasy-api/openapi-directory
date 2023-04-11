import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateJobActionEnum {
    UpdateJob = "UpdateJob"
}
export declare enum POSTUpdateJobOperationEnum {
    UpdateJob = "UpdateJob"
}
export declare enum POSTUpdateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class POSTUpdateJobRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTUpdateJobActionEnum;
    operation: POSTUpdateJobOperationEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTUpdateJobVersionEnum;
}
export declare class POSTUpdateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
