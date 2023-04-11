import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of a bot to create.
 */
export declare enum CreateBotRequestBodyBotTypeEnum {
    Bot = "Bot",
    BotNetwork = "BotNetwork"
}
/**
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
 */
export declare class CreateBotRequestBodyDataPrivacy extends SpeakeasyBase {
    childDirected?: boolean;
}
export declare class CreateBotRequestBody extends SpeakeasyBase {
    /**
     * The list of bot members in a network to be created.
     */
    botMembers?: shared.BotMember[];
    /**
     * The name of the bot. The bot name must be unique in the account that creates the bot.
     */
    botName: string;
    /**
     * A list of tags to add to the bot. You can only add tags when you create a bot. You can't use the <code>UpdateBot</code> operation to update tags. To update tags, use the <code>TagResource</code> operation.
     */
    botTags?: Record<string, string>;
    /**
     * The type of a bot to create.
     */
    botType?: CreateBotRequestBodyBotTypeEnum;
    /**
     * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
     */
    dataPrivacy: CreateBotRequestBodyDataPrivacy;
    /**
     * A description of the bot. It appears in lists to help you identify a particular bot.
     */
    description?: string;
    /**
     * <p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot. </p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>
     */
    idleSessionTTLInSeconds: number;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that has permission to access the bot.
     */
    roleArn: string;
    /**
     * A list of tags to add to the test alias for a bot. You can only add tags when you create a bot. You can't use the <code>UpdateAlias</code> operation to update tags. To update tags on the test alias, use the <code>TagResource</code> operation.
     */
    testBotAliasTags?: Record<string, string>;
}
export declare class CreateBotRequest extends SpeakeasyBase {
    requestBody: CreateBotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateBotResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createBotResponse?: shared.CreateBotResponse;
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
