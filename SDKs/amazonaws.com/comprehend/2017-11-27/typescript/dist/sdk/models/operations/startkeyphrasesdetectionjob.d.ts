import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartKeyPhrasesDetectionJobXAmzTargetEnum {
    Comprehend20171127StartKeyPhrasesDetectionJob = "Comprehend_20171127.StartKeyPhrasesDetectionJob"
}
export declare class StartKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
    startKeyPhrasesDetectionJobRequest: shared.StartKeyPhrasesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartKeyPhrasesDetectionJobXAmzTargetEnum;
}
export declare class StartKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
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
    startKeyPhrasesDetectionJobResponse?: shared.StartKeyPhrasesDetectionJobResponse;
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
