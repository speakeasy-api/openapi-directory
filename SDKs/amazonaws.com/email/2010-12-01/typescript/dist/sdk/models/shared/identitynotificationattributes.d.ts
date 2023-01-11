import { SpeakeasyBase } from "../../../internal/utils";
export declare class IdentityNotificationAttributes extends SpeakeasyBase {
    bounceTopic?: string;
    complaintTopic?: string;
    deliveryTopic?: string;
    forwardingEnabled?: boolean;
    headersInBounceNotificationsEnabled?: boolean;
    headersInComplaintNotificationsEnabled?: boolean;
    headersInDeliveryNotificationsEnabled?: boolean;
}
