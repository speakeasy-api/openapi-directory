import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCustomVocabularyItemsRequestBody extends SpeakeasyBase {
    /**
     * The maximum number of items returned by the list operation.
     */
    maxResults?: number;
    /**
     * The nextToken identifier to the list custom vocabulary request.
     */
    nextToken?: string;
}
export declare class ListCustomVocabularyItemsRequest extends SpeakeasyBase {
    requestBody: ListCustomVocabularyItemsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The identifier of the version of the bot associated with this custom vocabulary.
     */
    botId: string;
    /**
     * The bot version of the bot to the list custom vocabulary request.
     */
    botVersion: string;
    /**
     * The identifier of the language and locale where this custom vocabulary is used. The string must match one of the supported locales. For more information, see Supported languages (https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html).
     */
    localeId: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListCustomVocabularyItemsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listCustomVocabularyItemsResponse?: shared.ListCustomVocabularyItemsResponse;
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
