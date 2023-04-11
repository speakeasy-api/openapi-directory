import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartEventsDetectionJobXAmzTargetEnum {
    Comprehend20171127StartEventsDetectionJob = "Comprehend_20171127.StartEventsDetectionJob"
}
export declare class StartEventsDetectionJobRequest extends SpeakeasyBase {
    startEventsDetectionJobRequest: shared.StartEventsDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartEventsDetectionJobXAmzTargetEnum;
}
export declare class StartEventsDetectionJobResponse extends SpeakeasyBase {
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
    startEventsDetectionJobResponse?: shared.StartEventsDetectionJobResponse;
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
