import { SpeakeasyBase } from "../../../internal/utils";
import { ShareAttributes } from "./shareattributes";
export declare enum ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum {
    Message = "message"
}
export declare class ShareShareRelationshipsShareRelationshipsMessageShareMessageData extends SpeakeasyBase {
    id?: number;
    type?: ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum;
}
export declare class ShareShareRelationshipsShareRelationshipsMessage extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsMessageShareMessageData;
}
export declare enum ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum {
    Notification = "notification"
}
export declare class ShareShareRelationshipsShareRelationshipsNotificationData extends SpeakeasyBase {
    id?: number;
    type?: ShareShareRelationshipsShareRelationshipsNotificationDataTypeEnum;
}
export declare class ShareShareRelationshipsShareRelationshipsNotification extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsNotificationData;
}
export declare class ShareShareRelationshipsShareRelationshipsOwnerData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class ShareShareRelationshipsShareRelationshipsOwner extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsOwnerData;
}
export declare enum ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum {
    Resource = "resource"
}
export declare class ShareShareRelationshipsShareRelationshipsResourceShareResourceData extends SpeakeasyBase {
    id?: number;
    type?: ShareShareRelationshipsShareRelationshipsResourceShareResourceDataTypeEnum;
}
export declare class ShareShareRelationshipsShareRelationshipsResource extends SpeakeasyBase {
    data?: ShareShareRelationshipsShareRelationshipsResourceShareResourceData;
}
/**
 * Message, owner, resource, and notification relationships of the share.
**/
export declare class ShareShareRelationships extends SpeakeasyBase {
    messages?: ShareShareRelationshipsShareRelationshipsMessage[];
    notifications?: ShareShareRelationshipsShareRelationshipsNotification[];
    owner?: ShareShareRelationshipsShareRelationshipsOwner;
    resources?: ShareShareRelationshipsShareRelationshipsResource[];
}
export declare enum ShareTypeEnum {
    Share = "share"
}
/**
 * Object contains share properties.
**/
export declare class Share extends SpeakeasyBase {
    attributes?: ShareAttributes;
    id?: number;
    relationships?: ShareShareRelationships;
    type?: ShareTypeEnum;
}
