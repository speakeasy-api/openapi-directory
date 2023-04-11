import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartInferenceExperimentXAmzTargetEnum {
    SageMakerStartInferenceExperiment = "SageMaker.StartInferenceExperiment"
}
export declare class StartInferenceExperimentRequest extends SpeakeasyBase {
    startInferenceExperimentRequest: shared.StartInferenceExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartInferenceExperimentXAmzTargetEnum;
}
export declare class StartInferenceExperimentResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    startInferenceExperimentResponse?: shared.StartInferenceExperimentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
