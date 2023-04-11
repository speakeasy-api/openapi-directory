import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTranscriptionJobXAmzTargetEnum {
    TranscribeDeleteTranscriptionJob = "Transcribe.DeleteTranscriptionJob"
}
export declare class DeleteTranscriptionJobRequest extends SpeakeasyBase {
    deleteTranscriptionJobRequest: shared.DeleteTranscriptionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTranscriptionJobXAmzTargetEnum;
}
export declare class DeleteTranscriptionJobResponse extends SpeakeasyBase {
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
