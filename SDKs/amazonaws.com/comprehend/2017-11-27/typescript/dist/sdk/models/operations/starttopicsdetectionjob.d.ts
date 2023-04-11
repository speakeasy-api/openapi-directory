import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartTopicsDetectionJobXAmzTargetEnum {
    Comprehend20171127StartTopicsDetectionJob = "Comprehend_20171127.StartTopicsDetectionJob"
}
export declare class StartTopicsDetectionJobRequest extends SpeakeasyBase {
    startTopicsDetectionJobRequest: shared.StartTopicsDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartTopicsDetectionJobXAmzTargetEnum;
}
export declare class StartTopicsDetectionJobResponse extends SpeakeasyBase {
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
    startTopicsDetectionJobResponse?: shared.StartTopicsDetectionJobResponse;
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
