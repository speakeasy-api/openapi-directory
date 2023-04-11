import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelDataQualityRulesetEvaluationRunXAmzTargetEnum {
    AWSGlueCancelDataQualityRulesetEvaluationRun = "AWSGlue.CancelDataQualityRulesetEvaluationRun"
}
export declare class CancelDataQualityRulesetEvaluationRunRequest extends SpeakeasyBase {
    cancelDataQualityRulesetEvaluationRunRequest: shared.CancelDataQualityRulesetEvaluationRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelDataQualityRulesetEvaluationRunXAmzTargetEnum;
}
export declare class CancelDataQualityRulesetEvaluationRunResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelDataQualityRulesetEvaluationRunResponse?: Record<string, any>;
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
