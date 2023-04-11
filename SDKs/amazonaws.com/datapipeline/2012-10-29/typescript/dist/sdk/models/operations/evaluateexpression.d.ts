import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum EvaluateExpressionXAmzTargetEnum {
    DataPipelineEvaluateExpression = "DataPipeline.EvaluateExpression"
}
export declare class EvaluateExpressionRequest extends SpeakeasyBase {
    evaluateExpressionInput: shared.EvaluateExpressionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EvaluateExpressionXAmzTargetEnum;
}
export declare class EvaluateExpressionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    evaluateExpressionOutput?: shared.EvaluateExpressionOutput;
    /**
     * InternalServiceError
     */
    internalServiceError?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * PipelineDeletedException
     */
    pipelineDeletedException?: any;
    /**
     * PipelineNotFoundException
     */
    pipelineNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TaskNotFoundException
     */
    taskNotFoundException?: any;
}
