import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes a rule.
 */
export declare class ReplaceTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
    actions?: shared.Action[];
    awsIotSqlVersion?: string;
    description?: string;
    errorAction?: shared.Action;
    ruleDisabled?: boolean;
    sql?: string;
}
export declare class ReplaceTopicRuleRequestBody extends SpeakeasyBase {
    /**
     * Describes a rule.
     */
    topicRulePayload: ReplaceTopicRuleRequestBodyTopicRulePayload;
}
export declare class ReplaceTopicRuleRequest extends SpeakeasyBase {
    requestBody: ReplaceTopicRuleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the rule.
     */
    ruleName: string;
}
export declare class ReplaceTopicRuleResponse extends SpeakeasyBase {
    /**
     * ConflictingResourceUpdateException
     */
    conflictingResourceUpdateException?: any;
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * SqlParseException
     */
    sqlParseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
