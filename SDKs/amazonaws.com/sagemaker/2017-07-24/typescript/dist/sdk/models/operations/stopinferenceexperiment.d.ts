import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopInferenceExperimentXAmzTargetEnum {
    SageMakerStopInferenceExperiment = "SageMaker.StopInferenceExperiment"
}
export declare class StopInferenceExperimentRequest extends SpeakeasyBase {
    stopInferenceExperimentRequest: shared.StopInferenceExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopInferenceExperimentXAmzTargetEnum;
}
export declare class StopInferenceExperimentResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopInferenceExperimentResponse?: shared.StopInferenceExperimentResponse;
}
