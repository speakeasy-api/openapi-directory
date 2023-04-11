import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateVocabularyFilterXAmzTargetEnum {
    TranscribeCreateVocabularyFilter = "Transcribe.CreateVocabularyFilter"
}
export declare class CreateVocabularyFilterRequest extends SpeakeasyBase {
    createVocabularyFilterRequest: shared.CreateVocabularyFilterRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateVocabularyFilterXAmzTargetEnum;
}
export declare class CreateVocabularyFilterResponse extends SpeakeasyBase {
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
    createVocabularyFilterResponse?: shared.CreateVocabularyFilterResponse;
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
