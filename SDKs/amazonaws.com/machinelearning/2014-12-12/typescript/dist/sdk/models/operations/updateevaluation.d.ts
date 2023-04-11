import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEvaluationXAmzTargetEnum {
    AmazonML20141212UpdateEvaluation = "AmazonML_20141212.UpdateEvaluation"
}
export declare class UpdateEvaluationRequest extends SpeakeasyBase {
    updateEvaluationInput: shared.UpdateEvaluationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEvaluationXAmzTargetEnum;
}
export declare class UpdateEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateEvaluationOutput?: shared.UpdateEvaluationOutput;
}
