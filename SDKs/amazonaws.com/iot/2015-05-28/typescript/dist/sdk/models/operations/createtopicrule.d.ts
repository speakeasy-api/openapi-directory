import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Describes a rule.
 */
export declare class CreateTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
    actions?: shared.Action[];
    awsIotSqlVersion?: string;
    description?: string;
    errorAction?: shared.Action;
    ruleDisabled?: boolean;
    sql?: string;
}
export declare class CreateTopicRuleRequestBody extends SpeakeasyBase {
    /**
     * Describes a rule.
     */
    topicRulePayload: CreateTopicRuleRequestBodyTopicRulePayload;
}
export declare class CreateTopicRuleRequest extends SpeakeasyBase {
    requestBody: CreateTopicRuleRequestBody;
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
    /**
     * <p>Metadata which can be used to manage the topic rule.</p> <note> <p>For URI Request parameters use format: ...key1=value1&amp;key2=value2...</p> <p>For the CLI command-line parameter use format: --tags "key1=value1&amp;key2=value2..."</p> <p>For the cli-input-json file use format: "tags": "key1=value1&amp;key2=value2..."</p> </note>
     */
    xAmzTagging?: string;
}
export declare class CreateTopicRuleResponse extends SpeakeasyBase {
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
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
}
