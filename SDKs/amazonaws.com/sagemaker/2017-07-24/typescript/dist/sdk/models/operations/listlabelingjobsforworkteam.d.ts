import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLabelingJobsForWorkteamXAmzTargetEnum {
    SageMakerListLabelingJobsForWorkteam = "SageMaker.ListLabelingJobsForWorkteam"
}
export declare class ListLabelingJobsForWorkteamRequest extends SpeakeasyBase {
    listLabelingJobsForWorkteamRequest: shared.ListLabelingJobsForWorkteamRequest;
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
    xAmzTarget: ListLabelingJobsForWorkteamXAmzTargetEnum;
}
export declare class ListLabelingJobsForWorkteamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listLabelingJobsForWorkteamResponse?: shared.ListLabelingJobsForWorkteamResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
