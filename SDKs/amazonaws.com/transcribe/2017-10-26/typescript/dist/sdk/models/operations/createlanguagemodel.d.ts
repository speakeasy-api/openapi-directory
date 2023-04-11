import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLanguageModelXAmzTargetEnum {
    TranscribeCreateLanguageModel = "Transcribe.CreateLanguageModel"
}
export declare class CreateLanguageModelRequest extends SpeakeasyBase {
    createLanguageModelRequest: shared.CreateLanguageModelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLanguageModelXAmzTargetEnum;
}
export declare class CreateLanguageModelResponse extends SpeakeasyBase {
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
    createLanguageModelResponse?: shared.CreateLanguageModelResponse;
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
