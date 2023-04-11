import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StartSentimentDetectionJob = "Comprehend_20171127.StartSentimentDetectionJob"
}
export declare class StartSentimentDetectionJobRequest extends SpeakeasyBase {
    startSentimentDetectionJobRequest: shared.StartSentimentDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSentimentDetectionJobXAmzTargetEnum;
}
export declare class StartSentimentDetectionJobResponse extends SpeakeasyBase {
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
    startSentimentDetectionJobResponse?: shared.StartSentimentDetectionJobResponse;
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
