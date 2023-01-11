import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the notification.
**/
export declare class CreateVpcEndpointConnectionNotificationResultConnectionNotification extends SpeakeasyBase {
    connectionEvents?: Record<string, any>;
    connectionNotificationArn?: Record<string, any>;
    connectionNotificationId?: Record<string, any>;
    connectionNotificationState?: Record<string, any>;
    connectionNotificationType?: Record<string, any>;
    serviceId?: Record<string, any>;
    vpcEndpointId?: Record<string, any>;
}
export declare class CreateVpcEndpointConnectionNotificationResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    connectionNotification?: CreateVpcEndpointConnectionNotificationResultConnectionNotification;
}
