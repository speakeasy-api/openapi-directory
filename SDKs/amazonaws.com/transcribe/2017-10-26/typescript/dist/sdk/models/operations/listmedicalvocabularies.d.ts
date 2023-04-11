import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListMedicalVocabulariesXAmzTargetEnum {
    TranscribeListMedicalVocabularies = "Transcribe.ListMedicalVocabularies"
}
export declare class ListMedicalVocabulariesRequest extends SpeakeasyBase {
    listMedicalVocabulariesRequest: shared.ListMedicalVocabulariesRequest;
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
    xAmzTarget: ListMedicalVocabulariesXAmzTargetEnum;
}
export declare class ListMedicalVocabulariesResponse extends SpeakeasyBase {
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
    listMedicalVocabulariesResponse?: shared.ListMedicalVocabulariesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
