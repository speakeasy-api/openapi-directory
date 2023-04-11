import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopTargetedSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127StopTargetedSentimentDetectionJob = "Comprehend_20171127.StopTargetedSentimentDetectionJob"
}
export declare class StopTargetedSentimentDetectionJobRequest extends SpeakeasyBase {
    stopTargetedSentimentDetectionJobRequest: shared.StopTargetedSentimentDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTargetedSentimentDetectionJobXAmzTargetEnum;
}
export declare class StopTargetedSentimentDetectionJobResponse extends SpeakeasyBase {
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
    stopTargetedSentimentDetectionJobResponse?: shared.StopTargetedSentimentDetectionJobResponse;
}
