import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the notification.
 */
export declare enum DescribeVpcEndpointConnectionNotificationsResultConnectionNotificationSetConnectionNotificationStateEnum {
    Enabled = "Enabled",
    Disabled = "Disabled"
}
/**
 * The type of notification.
 */
export declare enum DescribeVpcEndpointConnectionNotificationsResultConnectionNotificationSetConnectionNotificationTypeEnum {
    Topic = "Topic"
}
/**
 * Describes a connection notification for a VPC endpoint or VPC endpoint service.
 */
export declare class DescribeVpcEndpointConnectionNotificationsResultConnectionNotificationSet extends SpeakeasyBase {
    connectionEvents?: string[];
    connectionNotificationArn?: string;
    connectionNotificationId?: string;
    connectionNotificationState?: DescribeVpcEndpointConnectionNotificationsResultConnectionNotificationSetConnectionNotificationStateEnum;
    connectionNotificationType?: DescribeVpcEndpointConnectionNotificationsResultConnectionNotificationSetConnectionNotificationTypeEnum;
    serviceId?: string;
    vpcEndpointId?: string;
}
/**
 * Success
 */
export declare class DescribeVpcEndpointConnectionNotificationsResult extends SpeakeasyBase {
    connectionNotificationSet?: DescribeVpcEndpointConnectionNotificationsResultConnectionNotificationSet[];
    nextToken?: string;
}
