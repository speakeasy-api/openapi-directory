import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMedicalTranscriptionJobXAmzTargetEnum {
    TranscribeDeleteMedicalTranscriptionJob = "Transcribe.DeleteMedicalTranscriptionJob"
}
export declare class DeleteMedicalTranscriptionJobRequest extends SpeakeasyBase {
    deleteMedicalTranscriptionJobRequest: shared.DeleteMedicalTranscriptionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMedicalTranscriptionJobXAmzTargetEnum;
}
export declare class DeleteMedicalTranscriptionJobResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
