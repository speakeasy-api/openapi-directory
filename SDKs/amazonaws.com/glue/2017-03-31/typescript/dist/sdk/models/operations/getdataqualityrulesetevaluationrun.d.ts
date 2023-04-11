import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataQualityRulesetEvaluationRunXAmzTargetEnum {
    AWSGlueGetDataQualityRulesetEvaluationRun = "AWSGlue.GetDataQualityRulesetEvaluationRun"
}
export declare class GetDataQualityRulesetEvaluationRunRequest extends SpeakeasyBase {
    getDataQualityRulesetEvaluationRunRequest: shared.GetDataQualityRulesetEvaluationRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataQualityRulesetEvaluationRunXAmzTargetEnum;
}
export declare class GetDataQualityRulesetEvaluationRunResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getDataQualityRulesetEvaluationRunResponse?: shared.GetDataQualityRulesetEvaluationRunResponse;
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
