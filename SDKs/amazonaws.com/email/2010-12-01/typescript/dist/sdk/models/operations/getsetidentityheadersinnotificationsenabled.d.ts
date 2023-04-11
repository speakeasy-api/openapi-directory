import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetIdentityHeadersInNotificationsEnabledActionEnum {
    SetIdentityHeadersInNotificationsEnabled = "SetIdentityHeadersInNotificationsEnabled"
}
/**
 * The notification type for which to enable or disable headers in notifications.
 */
export declare enum GETSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum {
    Bounce = "Bounce",
    Complaint = "Complaint",
    Delivery = "Delivery"
}
export declare enum GETSetIdentityHeadersInNotificationsEnabledVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETSetIdentityHeadersInNotificationsEnabledRequest extends SpeakeasyBase {
    action: GETSetIdentityHeadersInNotificationsEnabledActionEnum;
    /**
     * <p>Sets whether Amazon SES includes the original email headers in Amazon SNS notifications of the specified notification type. A value of <code>true</code> specifies that Amazon SES will include headers in notifications, and a value of <code>false</code> specifies that Amazon SES will not include headers in notifications.</p> <p>This value can only be set when <code>NotificationType</code> is already set to use a particular Amazon SNS topic.</p>
     */
    enabled: boolean;
    /**
     * The identity for which to enable or disable headers in notifications. Examples: <code>user@example.com</code>, <code>example.com</code>.
     */
    identity: string;
    /**
     * The notification type for which to enable or disable headers in notifications.
     */
    notificationType: GETSetIdentityHeadersInNotificationsEnabledNotificationTypeEnum;
    version: GETSetIdentityHeadersInNotificationsEnabledVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetIdentityHeadersInNotificationsEnabledResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
