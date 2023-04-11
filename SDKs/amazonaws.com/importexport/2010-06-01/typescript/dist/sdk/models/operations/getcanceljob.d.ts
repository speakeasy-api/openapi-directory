import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCancelJobActionEnum {
    CancelJob = "CancelJob"
}
export declare enum GETCancelJobOperationEnum {
    CancelJob = "CancelJob"
}
export declare enum GETCancelJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GETCancelJobRequest extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GETCancelJobActionEnum;
    jobId: string;
    operation: GETCancelJobOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETCancelJobVersionEnum;
}
export declare class GETCancelJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
