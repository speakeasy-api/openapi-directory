import { SpeakeasyBase } from "../../../internal/utils";
import { ShareAttributes } from "./shareattributes";
/**
 * Type is message.
 */
export declare enum ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum {
    Message = "message"
}
export declare class ShareShareRelationshipsShareRelationshipsMessageShareMessageData extends SpeakeasyBase {
    /**
     * ID of the message.
     */
    id?: number;
    /**
     * Type is message.
     */
    type?: ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum;
}
export declare class ShareShareRelationshipsShareRelationshipsMessage extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsMessageShareMessageData;
}
/**
 * Type is notification.
 */
export declare enum ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum {
    Notification = "notification"
}
export declare class ShareShareRelationshipsShareRelationshipsNotificationData extends SpeakeasyBase {
    /**
     * ID of the notification.
     */
    id?: number;
    /**
     * Type is notification.
     */
    type?: ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum;
}
export declare class ShareShareRelationshipsShareRelationshipsNotification extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsNotificationData;
}
export declare class ShareShareRelationshipsShareRelationshipsOwnerData extends SpeakeasyBase {
    /**
     * ID of the owner.
     */
    id?: number;
    /**
     * Type is user.
     */
    type?: string;
}
export declare class ShareShareRelationshipsShareRelationshipsOwner extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsOwnerData;
}
/**
 * Type is resource.
 */
export declare enum ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum {
    Resource = "resource"
}
export declare class ShareShareRelationshipsShareRelationshipsResourceShareResourceData extends SpeakeasyBase {
    /**
     * ID of the shared resource.
     */
    id?: number;
    /**
     * Type is resource.
     */
    type?: ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum;
}
export declare class ShareShareRelationshipsShareRelationshipsResource extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsResourceShareResourceData;
}
/**
 * Message, owner, resource, and notification relationships of the share.
 */
export declare class ShareShareRelationships extends SpeakeasyBase {
    messages?: ShareShareRelationshipsShareRelationshipsMessage[];
    notifications?: ShareShareRelationshipsShareRelationshipsNotification[];
    owner?: ShareShareRelationshipsShareRelationshipsOwner;
    resources?: ShareShareRelationshipsShareRelationshipsResource[];
}
/**
 * Type of the share.
 */
export declare enum ShareTypeEnum {
    Share = "share"
}
/**
 * Object contains share properties.
 */
export declare class Share extends SpeakeasyBase {
    /**
     * Attributes of the share including the name, path and share recipients.
     */
    attributes?: ShareAttributes;
    /**
     * ID of the share.
     */
    id?: number;
    /**
     * Message, owner, resource, and notification relationships of the share.
     */
    relationships?: ShareShareRelationships;
    /**
     * Type of the share.
     */
    type?: ShareTypeEnum;
}
