import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSamplingRuleRequestBody extends SpeakeasyBase {
    /**
     * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    ruleARN?: string;
    /**
     * The name of the sampling rule. Specify a rule by either name or ARN, but not both.
     */
    ruleName?: string;
}
export declare class DeleteSamplingRuleRequest extends SpeakeasyBase {
    requestBody: DeleteSamplingRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSamplingRuleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSamplingRuleResult?: shared.DeleteSamplingRuleResult;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
