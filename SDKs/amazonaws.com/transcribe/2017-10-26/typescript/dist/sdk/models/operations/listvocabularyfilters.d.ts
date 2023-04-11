import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVocabularyFiltersXAmzTargetEnum {
    TranscribeListVocabularyFilters = "Transcribe.ListVocabularyFilters"
}
export declare class ListVocabularyFiltersRequest extends SpeakeasyBase {
    listVocabularyFiltersRequest: shared.ListVocabularyFiltersRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVocabularyFiltersXAmzTargetEnum;
}
export declare class ListVocabularyFiltersResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listVocabularyFiltersResponse?: shared.ListVocabularyFiltersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
