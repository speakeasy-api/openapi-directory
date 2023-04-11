import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127StartDominantLanguageDetectionJob = "Comprehend_20171127.StartDominantLanguageDetectionJob"
}
export declare class StartDominantLanguageDetectionJobRequest extends SpeakeasyBase {
    startDominantLanguageDetectionJobRequest: shared.StartDominantLanguageDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDominantLanguageDetectionJobXAmzTargetEnum;
}
export declare class StartDominantLanguageDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * KmsKeyValidationException
     */
    kmsKeyValidationException?: any;
    /**
     * Success
     */
    startDominantLanguageDetectionJobResponse?: shared.StartDominantLanguageDetectionJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
