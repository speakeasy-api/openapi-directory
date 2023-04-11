import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum {
    SageMakerListTrainingJobsForHyperParameterTuningJob = "SageMaker.ListTrainingJobsForHyperParameterTuningJob"
}
export declare class ListTrainingJobsForHyperParameterTuningJobRequest extends SpeakeasyBase {
    listTrainingJobsForHyperParameterTuningJobRequest: shared.ListTrainingJobsForHyperParameterTuningJobRequest;
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
    xAmzTarget: ListTrainingJobsForHyperParameterTuningJobXAmzTargetEnum;
}
export declare class ListTrainingJobsForHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTrainingJobsForHyperParameterTuningJobResponse?: shared.ListTrainingJobsForHyperParameterTuningJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
