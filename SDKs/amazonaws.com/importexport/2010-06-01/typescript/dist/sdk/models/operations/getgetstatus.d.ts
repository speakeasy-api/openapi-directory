import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETStatusActionEnum {
    GetStatus = "GetStatus"
}
export declare enum GETGETStatusOperationEnum {
    GetStatus = "GetStatus"
}
export declare enum GETGETStatusVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GETGETStatusRequest extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GETGETStatusActionEnum;
    jobId: string;
    operation: GETGETStatusOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETGETStatusVersionEnum;
}
export declare class GETGETStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
