import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Indicates whether you want to increase or decrease the retention period.
 */
export declare enum UpdateDataRetentionRequestBodyOperationEnum {
    IncreaseDataRetention = "INCREASE_DATA_RETENTION",
    DecreaseDataRetention = "DECREASE_DATA_RETENTION"
}
export declare class UpdateDataRetentionRequestBody extends SpeakeasyBase {
    /**
     * The version of the stream whose retention period you want to change. To get the version, call either the <code>DescribeStream</code> or the <code>ListStreams</code> API.
     */
    currentVersion: string;
    /**
     * The retention period, in hours. The value you specify replaces the current value. The maximum value for this parameter is 87600 (ten years).
     */
    dataRetentionChangeInHours: number;
    /**
     * Indicates whether you want to increase or decrease the retention period.
     */
    operation: UpdateDataRetentionRequestBodyOperationEnum;
    /**
     * The Amazon Resource Name (ARN) of the stream whose retention period you want to change.
     */
    streamARN?: string;
    /**
     * The name of the stream whose retention period you want to change.
     */
    streamName?: string;
}
export declare class UpdateDataRetentionRequest extends SpeakeasyBase {
    requestBody: UpdateDataRetentionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDataRetentionResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateDataRetentionOutput?: Record<string, any>;
    /**
     * VersionMismatchException
     */
    versionMismatchException?: any;
}
