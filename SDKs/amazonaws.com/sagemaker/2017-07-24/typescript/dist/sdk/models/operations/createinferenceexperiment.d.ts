import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateInferenceExperimentXAmzTargetEnum {
    SageMakerCreateInferenceExperiment = "SageMaker.CreateInferenceExperiment"
}
export declare class CreateInferenceExperimentRequest extends SpeakeasyBase {
    createInferenceExperimentRequest: shared.CreateInferenceExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInferenceExperimentXAmzTargetEnum;
}
export declare class CreateInferenceExperimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createInferenceExperimentResponse?: shared.CreateInferenceExperimentResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
