import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVocabulariesXAmzTargetEnum {
    TranscribeListVocabularies = "Transcribe.ListVocabularies"
}
export declare class ListVocabulariesRequest extends SpeakeasyBase {
    listVocabulariesRequest: shared.ListVocabulariesRequest;
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
    xAmzTarget: ListVocabulariesXAmzTargetEnum;
}
export declare class ListVocabulariesResponse extends SpeakeasyBase {
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
    listVocabulariesResponse?: shared.ListVocabulariesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
