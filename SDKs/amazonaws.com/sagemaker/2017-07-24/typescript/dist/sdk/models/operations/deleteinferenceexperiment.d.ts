import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteInferenceExperimentXAmzTargetEnum {
    SageMakerDeleteInferenceExperiment = "SageMaker.DeleteInferenceExperiment"
}
export declare class DeleteInferenceExperimentRequest extends SpeakeasyBase {
    deleteInferenceExperimentRequest: shared.DeleteInferenceExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInferenceExperimentXAmzTargetEnum;
}
export declare class DeleteInferenceExperimentResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteInferenceExperimentResponse?: shared.DeleteInferenceExperimentResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
}
