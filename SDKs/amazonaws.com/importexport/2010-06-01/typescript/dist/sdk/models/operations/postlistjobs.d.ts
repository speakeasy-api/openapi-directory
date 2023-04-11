import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListJobsActionEnum {
    ListJobs = "ListJobs"
}
export declare enum POSTListJobsOperationEnum {
    ListJobs = "ListJobs"
}
export declare enum POSTListJobsVersionEnum {
    TwoThousandAndTen0601 = "2010-06-01"
}
export declare class POSTListJobsRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTListJobsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxJobs?: string;
    operation: POSTListJobsOperationEnum;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTListJobsVersionEnum;
}
export declare class POSTListJobsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
