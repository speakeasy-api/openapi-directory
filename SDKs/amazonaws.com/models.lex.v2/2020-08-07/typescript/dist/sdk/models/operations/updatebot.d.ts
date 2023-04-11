import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of the bot to be updated.
 */
export declare enum UpdateBotRequestBodyBotTypeEnum {
    Bot = "Bot",
    BotNetwork = "BotNetwork"
}
/**
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
 */
export declare class UpdateBotRequestBodyDataPrivacy extends SpeakeasyBase {
    childDirected?: boolean;
}
export declare class UpdateBotRequestBody extends SpeakeasyBase {
    /**
     * The list of bot members in the network associated with the update action.
     */
    botMembers?: shared.BotMember[];
    /**
     * The new name of the bot. The name must be unique in the account that creates the bot.
     */
    botName: string;
    /**
     * The type of the bot to be updated.
     */
    botType?: UpdateBotRequestBodyBotTypeEnum;
    /**
     * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot.
     */
    dataPrivacy: UpdateBotRequestBodyDataPrivacy;
    /**
     * A description of the bot.
     */
    description?: string;
    /**
     * <p>The time, in seconds, that Amazon Lex should keep information about a user's conversation with the bot.</p> <p>A user interaction remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.</p> <p>You can specify between 60 (1 minute) and 86,400 (24 hours) seconds.</p>
     */
    idleSessionTTLInSeconds: number;
    /**
     * The Amazon Resource Name (ARN) of an IAM role that has permissions to access the bot.
     */
    roleArn: string;
}
export declare class UpdateBotRequest extends SpeakeasyBase {
    requestBody: UpdateBotRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot to update. This identifier is returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/APIReference/API_CreateBot.html">CreateBot</a> operation.
     */
    botId: string;
}
export declare class UpdateBotResponse extends SpeakeasyBase {
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
    updateBotResponse?: shared.UpdateBotResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
