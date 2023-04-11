import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateEvaluationXAmzTargetEnum {
    AmazonML20141212CreateEvaluation = "AmazonML_20141212.CreateEvaluation"
}
export declare class CreateEvaluationRequest extends SpeakeasyBase {
    createEvaluationInput: shared.CreateEvaluationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEvaluationXAmzTargetEnum;
}
export declare class CreateEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createEvaluationOutput?: shared.CreateEvaluationOutput;
    /**
     * IdempotentParameterMismatchException
     */
    idempotentParameterMismatchException?: any;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
