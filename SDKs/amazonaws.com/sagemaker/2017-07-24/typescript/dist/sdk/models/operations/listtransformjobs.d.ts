import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTransformJobsXAmzTargetEnum {
    SageMakerListTransformJobs = "SageMaker.ListTransformJobs"
}
export declare class ListTransformJobsRequest extends SpeakeasyBase {
    listTransformJobsRequest: shared.ListTransformJobsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTransformJobsXAmzTargetEnum;
}
export declare class ListTransformJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTransformJobsResponse?: shared.ListTransformJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
