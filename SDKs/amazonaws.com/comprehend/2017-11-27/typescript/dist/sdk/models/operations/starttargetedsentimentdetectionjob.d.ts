import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTargetedSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StartTargetedSentimentDetectionJob = "Comprehend_20171127.StartTargetedSentimentDetectionJob"
}
export declare class StartTargetedSentimentDetectionJobRequest extends SpeakeasyBase {
    startTargetedSentimentDetectionJobRequest: shared.StartTargetedSentimentDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTargetedSentimentDetectionJobXAmzTargetEnum;
}
export declare class StartTargetedSentimentDetectionJobResponse extends SpeakeasyBase {
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
    startTargetedSentimentDetectionJobResponse?: shared.StartTargetedSentimentDetectionJobResponse;
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
