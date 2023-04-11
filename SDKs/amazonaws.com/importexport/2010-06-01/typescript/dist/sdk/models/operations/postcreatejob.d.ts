import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateJobActionEnum {
    CreateJob = "CreateJob"
}
export declare enum POSTCreateJobOperationEnum {
    CreateJob = "CreateJob"
}
export declare enum POSTCreateJobVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class POSTCreateJobRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTCreateJobActionEnum;
    operation: POSTCreateJobOperationEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTCreateJobVersionEnum;
}
export declare class POSTCreateJobResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
