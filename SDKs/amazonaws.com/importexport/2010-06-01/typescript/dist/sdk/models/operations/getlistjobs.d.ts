import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListJobsActionEnum {
    ListJobs = "ListJobs"
}
export declare enum GETListJobsOperationEnum {
    ListJobs = "ListJobs"
}
export declare enum GETListJobsVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class GETListJobsRequest extends SpeakeasyBase {
    apiVersion?: string;
    awsAccessKeyId: string;
    action: GETListJobsActionEnum;
    marker?: string;
    maxJobs?: number;
    operation: GETListJobsOperationEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETListJobsVersionEnum;
}
export declare class GETListJobsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
