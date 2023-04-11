import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeGetMedicalTranscriptionJob = "Transcribe.GetMedicalTranscriptionJob"
}
export declare class GetMedicalTranscriptionJobRequest extends SpeakeasyBase {
    getMedicalTranscriptionJobRequest: shared.GetMedicalTranscriptionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMedicalTranscriptionJobXAmzTargetEnum;
}
export declare class GetMedicalTranscriptionJobResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getMedicalTranscriptionJobResponse?: shared.GetMedicalTranscriptionJobResponse;
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
