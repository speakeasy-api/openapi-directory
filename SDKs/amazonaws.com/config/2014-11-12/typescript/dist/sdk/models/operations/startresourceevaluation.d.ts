import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartResourceEvaluationXAmzTargetEnum {
    StarlingDoveServiceStartResourceEvaluation = "StarlingDoveService.StartResourceEvaluation"
}
export declare class StartResourceEvaluationRequest extends SpeakeasyBase {
    startResourceEvaluationRequest: shared.StartResourceEvaluationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartResourceEvaluationXAmzTargetEnum;
}
export declare class StartResourceEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * IdempotentParameterMismatch
     */
    idempotentParameterMismatch?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    startResourceEvaluationResponse?: shared.StartResourceEvaluationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
