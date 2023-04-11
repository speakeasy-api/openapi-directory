import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeStartMedicalTranscriptionJob = "Transcribe.StartMedicalTranscriptionJob"
}
export declare class StartMedicalTranscriptionJobRequest extends SpeakeasyBase {
    startMedicalTranscriptionJobRequest: shared.StartMedicalTranscriptionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMedicalTranscriptionJobXAmzTargetEnum;
}
export declare class StartMedicalTranscriptionJobResponse extends SpeakeasyBase {
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
    startMedicalTranscriptionJobResponse?: shared.StartMedicalTranscriptionJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
