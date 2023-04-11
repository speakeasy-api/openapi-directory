import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCompilationJobsXAmzTargetEnum {
    SageMakerListCompilationJobs = "SageMaker.ListCompilationJobs"
}
export declare class ListCompilationJobsRequest extends SpeakeasyBase {
    listCompilationJobsRequest: shared.ListCompilationJobsRequest;
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
    xAmzTarget: ListCompilationJobsXAmzTargetEnum;
}
export declare class ListCompilationJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listCompilationJobsResponse?: shared.ListCompilationJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
