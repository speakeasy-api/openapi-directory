import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteVocabularyFilterXAmzTargetEnum {
    TranscribeDeleteVocabularyFilter = "Transcribe.DeleteVocabularyFilter"
}
export declare class DeleteVocabularyFilterRequest extends SpeakeasyBase {
    deleteVocabularyFilterRequest: shared.DeleteVocabularyFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteVocabularyFilterXAmzTargetEnum;
}
export declare class DeleteVocabularyFilterResponse extends SpeakeasyBase {
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
