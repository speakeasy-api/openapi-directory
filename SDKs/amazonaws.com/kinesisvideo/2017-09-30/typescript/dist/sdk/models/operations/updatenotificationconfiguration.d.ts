import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.
 */
export declare class UpdateNotificationConfigurationRequestBodyNotificationConfiguration extends SpeakeasyBase {
    destinationConfig?: shared.NotificationDestinationConfig;
    status?: shared.ConfigurationStatusEnum;
}
export declare class UpdateNotificationConfigurationRequestBody extends SpeakeasyBase {
    /**
     * The structure that contains the notification information for the KVS images delivery. If this parameter is null, the configuration will be deleted from the stream.
     */
    notificationConfiguration?: UpdateNotificationConfigurationRequestBodyNotificationConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the Kinesis video stream from where you want to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamARN?: string;
    /**
     * The name of the stream from which to update the notification configuration. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.
     */
    streamName?: string;
}
export declare class UpdateNotificationConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateNotificationConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateNotificationConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * NoDataRetentionException
     */
    noDataRetentionException?: any;
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
    updateNotificationConfigurationOutput?: Record<string, any>;
}
