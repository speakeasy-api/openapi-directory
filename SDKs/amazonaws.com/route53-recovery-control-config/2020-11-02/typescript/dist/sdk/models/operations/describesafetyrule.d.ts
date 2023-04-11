import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DescribeSafetyRuleRequest extends SpeakeasyBase {
    /**
     * The ARN of the safety rule.
     */
    safetyRuleArn: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSafetyRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSafetyRuleResponse?: shared.DescribeSafetyRuleResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
