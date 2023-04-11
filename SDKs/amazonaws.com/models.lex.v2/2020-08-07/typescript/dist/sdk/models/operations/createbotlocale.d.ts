import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
 */
export declare class CreateBotLocaleRequestBodyVoiceSettings extends SpeakeasyBase {
    engine?: shared.VoiceEngineEnum;
    voiceId?: string;
}
export declare class CreateBotLocaleRequestBody extends SpeakeasyBase {
    /**
     * A description of the bot locale. Use this to help identify the bot locale in lists.
     */
    description?: string;
    /**
     * The identifier of the language and locale that the bot will be used in. The string must match one of the supported locales. All of the intents, slot types, and slots used in the bot must have the same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
    /**
     * <p>Determines the threshold where Amazon Lex will insert the <code>AMAZON.FallbackIntent</code>, <code>AMAZON.KendraSearchIntent</code>, or both when returning alternative intents. <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> are only inserted if they are configured for the bot.</p> <p>For example, suppose a bot is configured with the confidence threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the <code>RecognizeText</code> operation would be:</p> <ul> <li> <p>AMAZON.FallbackIntent</p> </li> <li> <p>IntentA</p> </li> <li> <p>IntentB</p> </li> <li> <p>IntentC</p> </li> </ul>
     */
    nluIntentConfidenceThreshold: number;
    /**
     * Defines settings for using an Amazon Polly voice to communicate with a user.
     */
    voiceSettings?: CreateBotLocaleRequestBodyVoiceSettings;
}
export declare class CreateBotLocaleRequest extends SpeakeasyBase {
    requestBody: CreateBotLocaleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot to create the locale for.
     */
    botId: string;
    /**
     * The version of the bot to create the locale for. This can only be the draft version of the bot.
     */
    botVersion: string;
}
export declare class CreateBotLocaleResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createBotLocaleResponse?: shared.CreateBotLocaleResponse;
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
