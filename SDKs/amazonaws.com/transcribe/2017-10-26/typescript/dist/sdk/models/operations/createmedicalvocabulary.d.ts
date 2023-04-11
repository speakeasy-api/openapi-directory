import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMedicalVocabularyXAmzTargetEnum {
    TranscribeCreateMedicalVocabulary = "Transcribe.CreateMedicalVocabulary"
}
export declare class CreateMedicalVocabularyRequest extends SpeakeasyBase {
    createMedicalVocabularyRequest: shared.CreateMedicalVocabularyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMedicalVocabularyXAmzTargetEnum;
}
export declare class CreateMedicalVocabularyResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createMedicalVocabularyResponse?: shared.CreateMedicalVocabularyResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
