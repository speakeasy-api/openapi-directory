import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateVocabularyFilterXAmzTargetEnum {
    TranscribeUpdateVocabularyFilter = "Transcribe.UpdateVocabularyFilter"
}
export declare class UpdateVocabularyFilterRequest extends SpeakeasyBase {
    updateVocabularyFilterRequest: shared.UpdateVocabularyFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVocabularyFilterXAmzTargetEnum;
}
export declare class UpdateVocabularyFilterResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateVocabularyFilterResponse?: shared.UpdateVocabularyFilterResponse;
}
