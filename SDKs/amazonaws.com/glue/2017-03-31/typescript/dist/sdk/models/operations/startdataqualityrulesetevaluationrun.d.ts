import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDataQualityRulesetEvaluationRunXAmzTargetEnum {
    AWSGlueStartDataQualityRulesetEvaluationRun = "AWSGlue.StartDataQualityRulesetEvaluationRun"
}
export declare class StartDataQualityRulesetEvaluationRunRequest extends SpeakeasyBase {
    startDataQualityRulesetEvaluationRunRequest: shared.StartDataQualityRulesetEvaluationRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDataQualityRulesetEvaluationRunXAmzTargetEnum;
}
export declare class StartDataQualityRulesetEvaluationRunResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
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
    /**
     * Success
     */
    startDataQualityRulesetEvaluationRunResponse?: shared.StartDataQualityRulesetEvaluationRunResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
