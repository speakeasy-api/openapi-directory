import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StopSentimentDetectionJob = "Comprehend_20171127.StopSentimentDetectionJob"
}
export declare class StopSentimentDetectionJobRequest extends SpeakeasyBase {
    stopSentimentDetectionJobRequest: shared.StopSentimentDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopSentimentDetectionJobXAmzTargetEnum;
}
export declare class StopSentimentDetectionJobResponse extends SpeakeasyBase {
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
     * JobNotFoundException
     */
    jobNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopSentimentDetectionJobResponse?: shared.StopSentimentDetectionJobResponse;
}
