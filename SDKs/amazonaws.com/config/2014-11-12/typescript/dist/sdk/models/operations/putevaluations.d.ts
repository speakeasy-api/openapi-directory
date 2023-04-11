import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutEvaluationsXAmzTargetEnum {
    StarlingDoveServicePutEvaluations = "StarlingDoveService.PutEvaluations"
}
export declare class PutEvaluationsRequest extends SpeakeasyBase {
    putEvaluationsRequest: shared.PutEvaluationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutEvaluationsXAmzTargetEnum;
}
export declare class PutEvaluationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidResultTokenException
     */
    invalidResultTokenException?: any;
    /**
     * NoSuchConfigRuleException
     */
    noSuchConfigRuleException?: any;
    /**
     * Success
     */
    putEvaluationsResponse?: shared.PutEvaluationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
