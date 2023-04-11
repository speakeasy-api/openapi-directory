import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetVocabularyFilterXAmzTargetEnum {
    TranscribeGetVocabularyFilter = "Transcribe.GetVocabularyFilter"
}
export declare class GetVocabularyFilterRequest extends SpeakeasyBase {
    getVocabularyFilterRequest: shared.GetVocabularyFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetVocabularyFilterXAmzTargetEnum;
}
export declare class GetVocabularyFilterResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getVocabularyFilterResponse?: shared.GetVocabularyFilterResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
