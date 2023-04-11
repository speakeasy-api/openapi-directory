import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartConfigRulesEvaluationXAmzTargetEnum {
    StarlingDoveServiceStartConfigRulesEvaluation = "StarlingDoveService.StartConfigRulesEvaluation"
}
export declare class StartConfigRulesEvaluationRequest extends SpeakeasyBase {
    startConfigRulesEvaluationRequest: shared.StartConfigRulesEvaluationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartConfigRulesEvaluationXAmzTargetEnum;
}
export declare class StartConfigRulesEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * Success
     */
    startConfigRulesEvaluationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
