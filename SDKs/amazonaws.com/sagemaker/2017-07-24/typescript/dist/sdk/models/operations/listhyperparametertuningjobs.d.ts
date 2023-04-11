import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListHyperParameterTuningJobsXAmzTargetEnum {
    SageMakerListHyperParameterTuningJobs = "SageMaker.ListHyperParameterTuningJobs"
}
export declare class ListHyperParameterTuningJobsRequest extends SpeakeasyBase {
    listHyperParameterTuningJobsRequest: shared.ListHyperParameterTuningJobsRequest;
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
    xAmzTarget: ListHyperParameterTuningJobsXAmzTargetEnum;
}
export declare class ListHyperParameterTuningJobsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listHyperParameterTuningJobsResponse?: shared.ListHyperParameterTuningJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
