import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCancelJobActionEnum {
    CancelJob = "CancelJob"
}
export declare enum POSTCancelJobOperationEnum {
    CancelJob = "CancelJob"
}
export declare enum POSTCancelJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class POSTCancelJobRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTCancelJobActionEnum;
    operation: POSTCancelJobOperationEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTCancelJobVersionEnum;
}
export declare class POSTCancelJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
