import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMedicalVocabularyXAmzTargetEnum {
    TranscribeUpdateMedicalVocabulary = "Transcribe.UpdateMedicalVocabulary"
}
export declare class UpdateMedicalVocabularyRequest extends SpeakeasyBase {
    updateMedicalVocabularyRequest: shared.UpdateMedicalVocabularyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMedicalVocabularyXAmzTargetEnum;
}
export declare class UpdateMedicalVocabularyResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateMedicalVocabularyResponse?: shared.UpdateMedicalVocabularyResponse;
}
