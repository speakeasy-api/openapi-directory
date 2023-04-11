import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateInferenceExperimentXAmzTargetEnum {
    SageMakerUpdateInferenceExperiment = "SageMaker.UpdateInferenceExperiment"
}
export declare class UpdateInferenceExperimentRequest extends SpeakeasyBase {
    updateInferenceExperimentRequest: shared.UpdateInferenceExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInferenceExperimentXAmzTargetEnum;
}
export declare class UpdateInferenceExperimentResponse extends SpeakeasyBase {
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
    updateInferenceExperimentResponse?: shared.UpdateInferenceExperimentResponse;
}
