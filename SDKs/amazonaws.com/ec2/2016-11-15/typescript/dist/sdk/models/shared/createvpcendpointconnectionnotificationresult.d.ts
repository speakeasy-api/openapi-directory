import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the notification.
 */
export declare enum CreateVpcEndpointConnectionNotificationResultConnectionNotificationConnectionNotificationStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled"
}
/**
 * The type of notification.
 */
export declare enum CreateVpcEndpointConnectionNotificationResultConnectionNotificationConnectionNotificationTypeEnum {
    Topic = "Topic"
}
/**
 * Information about the notification.
 */
export declare class CreateVpcEndpointConnectionNotificationResultConnectionNotification extends SpeakeasyBase {
    connectionEvents?: string[];
    connectionNotificationArn?: string;
    connectionNotificationId?: string;
    connectionNotificationState?: CreateVpcEndpointConnectionNotificationResultConnectionNotificationConnectionNotificationStateEnum;
    connectionNotificationType?: CreateVpcEndpointConnectionNotificationResultConnectionNotificationConnectionNotificationTypeEnum;
    serviceId?: string;
    vpcEndpointId?: string;
}
/**
 * Success
 */
export declare class CreateVpcEndpointConnectionNotificationResult extends SpeakeasyBase {
    clientToken?: string;
    connectionNotification?: CreateVpcEndpointConnectionNotificationResultConnectionNotification;
}
