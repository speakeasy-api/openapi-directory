import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListAutoMLJobsXAmzTargetEnum {
    SageMakerListAutoMLJobs = "SageMaker.ListAutoMLJobs"
}
export declare class ListAutoMLJobsRequest extends SpeakeasyBase {
    listAutoMLJobsRequest: shared.ListAutoMLJobsRequest;
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
    xAmzTarget: ListAutoMLJobsXAmzTargetEnum;
}
export declare class ListAutoMLJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listAutoMLJobsResponse?: shared.ListAutoMLJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
