import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.
 */
export declare class UpdateBotRecommendationRequestBodyEncryptionSetting extends SpeakeasyBase {
    associatedTranscriptsPassword?: string;
    botLocaleExportPassword?: string;
    kmsKeyArn?: string;
}
export declare class UpdateBotRecommendationRequestBody extends SpeakeasyBase {
    /**
     * The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.
     */
    encryptionSetting: UpdateBotRecommendationRequestBodyEncryptionSetting;
}
export declare class UpdateBotRecommendationRequest extends SpeakeasyBase {
    requestBody: UpdateBotRecommendationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot containing the bot recommendation to be updated.
     */
    botId: string;
    /**
     * The unique identifier of the bot recommendation to be updated.
     */
    botRecommendationId: string;
    /**
     * The version of the bot containing the bot recommendation to be updated.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale of the bot recommendation to update. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
     */
    localeId: string;
}
export declare class UpdateBotRecommendationResponse extends SpeakeasyBase {
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
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
    updateBotRecommendationResponse?: shared.UpdateBotRecommendationResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
