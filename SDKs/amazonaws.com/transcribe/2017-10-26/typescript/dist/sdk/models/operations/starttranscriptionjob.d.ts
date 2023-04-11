import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTranscriptionJobXAmzTargetEnum {
    TranscribeStartTranscriptionJob = "Transcribe.StartTranscriptionJob"
}
export declare class StartTranscriptionJobRequest extends SpeakeasyBase {
    startTranscriptionJobRequest: shared.StartTranscriptionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTranscriptionJobXAmzTargetEnum;
}
export declare class StartTranscriptionJobResponse extends SpeakeasyBase {
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
     * Success
     */
    startTranscriptionJobResponse?: shared.StartTranscriptionJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
