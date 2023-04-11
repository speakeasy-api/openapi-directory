import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopEventsDetectionJobXAmzTargetEnum {
    Comprehend20171127StopEventsDetectionJob = "Comprehend_20171127.StopEventsDetectionJob"
}
export declare class StopEventsDetectionJobRequest extends SpeakeasyBase {
    stopEventsDetectionJobRequest: shared.StopEventsDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEventsDetectionJobXAmzTargetEnum;
}
export declare class StopEventsDetectionJobResponse extends SpeakeasyBase {
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
    stopEventsDetectionJobResponse?: shared.StopEventsDetectionJobResponse;
}
