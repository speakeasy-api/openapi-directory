import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutExternalEvaluationXAmzTargetEnum {
    StarlingDoveServicePutExternalEvaluation = "StarlingDoveService.PutExternalEvaluation"
}
export declare class PutExternalEvaluationRequest extends SpeakeasyBase {
    putExternalEvaluationRequest: shared.PutExternalEvaluationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutExternalEvaluationXAmzTargetEnum;
}
export declare class PutExternalEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    /**
     * Success
     */
    putExternalEvaluationResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
