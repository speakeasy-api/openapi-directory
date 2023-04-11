import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BatchDeleteCustomVocabularyItemRequestBody extends SpeakeasyBase {
    /**
     * A list of custom vocabulary items requested to be deleted. Each entry must contain the unique custom vocabulary entry identifier.
     */
    customVocabularyItemList: shared.CustomVocabularyEntryId[];
}
export declare class BatchDeleteCustomVocabularyItemRequest extends SpeakeasyBase {
    requestBody: BatchDeleteCustomVocabularyItemRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the bot associated with this custom vocabulary.
     */
    botId: string;
    /**
     * The identifier of the version of the bot associated with this custom vocabulary.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html"> Supported Languages </a>.
     */
    localeId: string;
}
export declare class BatchDeleteCustomVocabularyItemResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchDeleteCustomVocabularyItemResponse?: shared.BatchDeleteCustomVocabularyItemResponse;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
