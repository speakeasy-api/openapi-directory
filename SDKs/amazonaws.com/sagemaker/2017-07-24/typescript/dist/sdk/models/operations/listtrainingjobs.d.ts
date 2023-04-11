import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTrainingJobsXAmzTargetEnum {
    SageMakerListTrainingJobs = "SageMaker.ListTrainingJobs"
}
export declare class ListTrainingJobsRequest extends SpeakeasyBase {
    listTrainingJobsRequest: shared.ListTrainingJobsRequest;
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
    xAmzTarget: ListTrainingJobsXAmzTargetEnum;
}
export declare class ListTrainingJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTrainingJobsResponse?: shared.ListTrainingJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
