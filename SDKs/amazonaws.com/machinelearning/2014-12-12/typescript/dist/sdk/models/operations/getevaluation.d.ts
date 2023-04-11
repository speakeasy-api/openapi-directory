import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEvaluationXAmzTargetEnum {
    AmazonML20141212GetEvaluation = "AmazonML_20141212.GetEvaluation"
}
export declare class GetEvaluationRequest extends SpeakeasyBase {
    getEvaluationInput: shared.GetEvaluationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEvaluationXAmzTargetEnum;
}
export declare class GetEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getEvaluationOutput?: shared.GetEvaluationOutput;
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
