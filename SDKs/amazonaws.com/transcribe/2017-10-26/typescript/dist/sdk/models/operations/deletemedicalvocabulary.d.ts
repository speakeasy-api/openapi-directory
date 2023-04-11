import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMedicalVocabularyXAmzTargetEnum {
    TranscribeDeleteMedicalVocabulary = "Transcribe.DeleteMedicalVocabulary"
}
export declare class DeleteMedicalVocabularyRequest extends SpeakeasyBase {
    deleteMedicalVocabularyRequest: shared.DeleteMedicalVocabularyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMedicalVocabularyXAmzTargetEnum;
}
export declare class DeleteMedicalVocabularyResponse extends SpeakeasyBase {
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
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
