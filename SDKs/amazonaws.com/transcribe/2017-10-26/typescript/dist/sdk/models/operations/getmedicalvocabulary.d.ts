import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMedicalVocabularyXAmzTargetEnum {
    TranscribeGetMedicalVocabulary = "Transcribe.GetMedicalVocabulary"
}
export declare class GetMedicalVocabularyRequest extends SpeakeasyBase {
    getMedicalVocabularyRequest: shared.GetMedicalVocabularyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMedicalVocabularyXAmzTargetEnum;
}
export declare class GetMedicalVocabularyResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getMedicalVocabularyResponse?: shared.GetMedicalVocabularyResponse;
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
