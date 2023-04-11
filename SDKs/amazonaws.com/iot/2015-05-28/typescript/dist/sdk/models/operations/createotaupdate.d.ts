import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The criteria that determine when and how a job abort takes place.
 */
export declare class CreateOTAUpdateRequestBodyAwsJobAbortConfig extends SpeakeasyBase {
    abortCriteriaList?: shared.AwsJobAbortCriteria[];
}
/**
 * Configuration for the rollout of OTA updates.
 */
export declare class CreateOTAUpdateRequestBodyAwsJobExecutionsRolloutConfig extends SpeakeasyBase {
    exponentialRate?: shared.AwsJobExponentialRolloutRate;
    maximumPerMinute?: number;
}
/**
 * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
 */
export declare class CreateOTAUpdateRequestBodyAwsJobPresignedUrlConfig extends SpeakeasyBase {
    expiresInSec?: number;
}
/**
 * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
 */
export declare class CreateOTAUpdateRequestBodyAwsJobTimeoutConfig extends SpeakeasyBase {
    inProgressTimeoutInMinutes?: number;
}
/**
 * Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT.
 */
export declare enum CreateOTAUpdateRequestBodyTargetSelectionEnum {
    Continuous = "CONTINUOUS",
    Snapshot = "SNAPSHOT"
}
export declare class CreateOTAUpdateRequestBody extends SpeakeasyBase {
    /**
     * A list of additional OTA update parameters which are name-value pairs.
     */
    additionalParameters?: Record<string, string>;
    /**
     * The criteria that determine when and how a job abort takes place.
     */
    awsJobAbortConfig?: CreateOTAUpdateRequestBodyAwsJobAbortConfig;
    /**
     * Configuration for the rollout of OTA updates.
     */
    awsJobExecutionsRolloutConfig?: CreateOTAUpdateRequestBodyAwsJobExecutionsRolloutConfig;
    /**
     * Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
     */
    awsJobPresignedUrlConfig?: CreateOTAUpdateRequestBodyAwsJobPresignedUrlConfig;
    /**
     * Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
     */
    awsJobTimeoutConfig?: CreateOTAUpdateRequestBodyAwsJobTimeoutConfig;
    /**
     * The description of the OTA update.
     */
    description?: string;
    /**
     * The files to be streamed by the OTA update.
     */
    files: shared.OTAUpdateFile[];
    /**
     * The protocol used to transfer the OTA update image. Valid values are [HTTP], [MQTT], [HTTP, MQTT]. When both HTTP and MQTT are specified, the target device can choose the protocol.
     */
    protocols?: shared.ProtocolEnum[];
    /**
     * The IAM role that grants Amazon Web Services IoT Core access to the Amazon S3, IoT jobs and Amazon Web Services Code Signing resources to create an OTA update job.
     */
    roleArn: string;
    /**
     * Metadata which can be used to manage updates.
     */
    tags?: shared.Tag[];
    /**
     * Specifies whether the update will continue to run (CONTINUOUS), or will be complete after all the things specified as targets have completed the update (SNAPSHOT). If continuous, the update may also be run on a thing when a change is detected in a target. For example, an update will run on a thing when the thing is added to a target group, even after the update was completed by all things originally in the group. Valid values: CONTINUOUS | SNAPSHOT.
     */
    targetSelection?: CreateOTAUpdateRequestBodyTargetSelectionEnum;
    /**
     * The devices targeted to receive OTA updates.
     */
    targets: string[];
}
export declare class CreateOTAUpdateRequest extends SpeakeasyBase {
    requestBody: CreateOTAUpdateRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The ID of the OTA update to be created.
     */
    otaUpdateId: string;
}
export declare class CreateOTAUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createOTAUpdateResponse?: shared.CreateOTAUpdateResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
