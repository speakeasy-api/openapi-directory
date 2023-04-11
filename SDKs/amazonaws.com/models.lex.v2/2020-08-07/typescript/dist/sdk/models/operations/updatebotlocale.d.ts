import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Defines settings for using an Amazon Polly voice to communicate with a user.
 */
export declare class UpdateBotLocaleRequestBodyVoiceSettings extends SpeakeasyBase {
    engine?: shared.VoiceEngineEnum;
    voiceId?: string;
}
export declare class UpdateBotLocaleRequestBody extends SpeakeasyBase {
    /**
     * The new description of the locale.
     */
    description?: string;
    /**
     * The new confidence threshold where Amazon Lex inserts the <code>AMAZON.FallbackIntent</code> and <code>AMAZON.KendraSearchIntent</code> intents in the list of possible intents for an utterance.
     */
    nluIntentConfidenceThreshold: number;
    /**
     * Defines settings for using an Amazon Polly voice to communicate with a user.
     */
    voiceSettings?: UpdateBotLocaleRequestBodyVoiceSettings;
}
export declare class UpdateBotLocaleRequest extends SpeakeasyBase {
    requestBody: UpdateBotLocaleRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot that contains the locale.
     */
    botId: string;
    /**
     * The version of the bot that contains the locale to be updated. The version can only be the <code>DRAFT</code> version.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale to update. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.
     */
    localeId: string;
}
export declare class UpdateBotLocaleResponse extends SpeakeasyBase {
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
    updateBotLocaleResponse?: shared.UpdateBotLocaleResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
