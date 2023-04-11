import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteEvaluationXAmzTargetEnum {
    AmazonML20141212DeleteEvaluation = "AmazonML_20141212.DeleteEvaluation"
}
export declare class DeleteEvaluationRequest extends SpeakeasyBase {
    deleteEvaluationInput: shared.DeleteEvaluationInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteEvaluationXAmzTargetEnum;
}
export declare class DeleteEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteEvaluationOutput?: shared.DeleteEvaluationOutput;
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
