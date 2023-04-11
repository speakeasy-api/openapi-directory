import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
 */
export declare class CreateBotAliasRequestBodyConversationLogSettings extends SpeakeasyBase {
    audioLogSettings?: shared.AudioLogSetting[];
    textLogSettings?: shared.TextLogSetting[];
}
/**
 * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
 */
export declare class CreateBotAliasRequestBodySentimentAnalysisSettings extends SpeakeasyBase {
    detectSentiment?: boolean;
}
export declare class CreateBotAliasRequestBody extends SpeakeasyBase {
    /**
     * Maps configuration information to a specific locale. You can use this parameter to specify a specific Lambda function to run different functions in different locales.
     */
    botAliasLocaleSettings?: Record<string, shared.BotAliasLocaleSettings>;
    /**
     * The alias to create. The name must be unique for the bot.
     */
    botAliasName: string;
    /**
     * The version of the bot that this alias points to. You can use the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the bot version associated with the alias.
     */
    botVersion?: string;
    /**
     * Configures conversation logging that saves audio, text, and metadata for the conversations with your users.
     */
    conversationLogSettings?: CreateBotAliasRequestBodyConversationLogSettings;
    /**
     * A description of the alias. Use this description to help identify the alias.
     */
    description?: string;
    /**
     * Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.
     */
    sentimentAnalysisSettings?: CreateBotAliasRequestBodySentimentAnalysisSettings;
    /**
     * A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the <code>UpdateBotAlias</code> operation to update the tags on a bot alias. To update tags, use the <code>TagResource</code> operation.
     */
    tags?: Record<string, string>;
}
export declare class CreateBotAliasRequest extends SpeakeasyBase {
    requestBody: CreateBotAliasRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot that the alias applies to.
     */
    botId: string;
}
export declare class CreateBotAliasResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createBotAliasResponse?: shared.CreateBotAliasResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * PreconditionFailedException
     */
    preconditionFailedException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
