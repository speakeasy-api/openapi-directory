import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
 */
export declare class UpdateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
    audioLogSettings?: shared.AudioLogSetting[];
    textLogSettings?: shared.TextLogSetting[];
}
/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
 */
export declare class UpdateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
    detectSentiment?: boolean;
}
export declare class UpdateBotAliasRequestBody extends SpeakeasyBase {
    /**
     * The new Lambda functions to use in each locale for the bot alias.
     */
    botAliasLocaleSettings?: Record<string, shared.BotAliasLocaleSettings>;
    /**
     * The new name to assign to the bot alias.
     */
    botAliasName: string;
    /**
     * The new bot version to assign to the bot alias.
     */
    botVersion?: string;
    /**
     * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
     */
    conversationLogSettings?: UpdateBotAliasRequestBodyConversationLogSettings;
    /**
     * The new description to assign to the bot alias.
     */
    description?: string;
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     */
    sentimentAnalysisSettings?: UpdateBotAliasRequestBodySentimentAnalysisSettings;
}
export declare class UpdateBotAliasRequest extends SpeakeasyBase {
    requestBody: UpdateBotAliasRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot alias.
     */
    botAliasId: string;
    /**
     * The identifier of the bot with the updated alias.
     */
    botId: string;
}
export declare class UpdateBotAliasResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateBotAliasResponse?: shared.UpdateBotAliasResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
