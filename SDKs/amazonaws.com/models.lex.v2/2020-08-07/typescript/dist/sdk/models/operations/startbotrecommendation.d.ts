import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.
 */
export declare class StartBotRecommendationRequestBodyEncryptionSetting extends SpeakeasyBase {
    associatedTranscriptsPassword?: string;
    botLocaleExportPassword?: string;
    kmsKeyArn?: string;
}
/**
 * Indicates the setting of the location where the transcript is stored.
 */
export declare class StartBotRecommendationRequestBodyTranscriptSourceSetting extends SpeakeasyBase {
    s3BucketTranscriptSource?: shared.S3BucketTranscriptSource;
}
export declare class StartBotRecommendationRequestBody extends SpeakeasyBase {
    /**
     * The object representing the passwords that were used to encrypt the data related to the bot recommendation, as well as the KMS key ARN used to encrypt the associated metadata.
     */
    encryptionSetting?: StartBotRecommendationRequestBodyEncryptionSetting;
    /**
     * Indicates the setting of the location where the transcript is stored.
     */
    transcriptSourceSetting: StartBotRecommendationRequestBodyTranscriptSourceSetting;
}
export declare class StartBotRecommendationRequest extends SpeakeasyBase {
    requestBody: StartBotRecommendationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the bot containing the bot recommendation.
     */
    botId: string;
    /**
     * The version of the bot containing the bot recommendation.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale of the bot recommendation to start. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
     */
    localeId: string;
}
export declare class StartBotRecommendationResponse extends SpeakeasyBase {
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
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * Success
     */
    startBotRecommendationResponse?: shared.StartBotRecommendationResponse;
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
