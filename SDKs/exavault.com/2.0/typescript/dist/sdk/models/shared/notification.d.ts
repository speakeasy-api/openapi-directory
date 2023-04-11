import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationAttributes } from "./notificationattributes";
export declare enum NotificationRelationshipsOwnerUserDataTypeEnum {
    User = "user"
}
export declare class NotificationRelationshipsOwnerUserData extends SpeakeasyBase {
    id?: number;
    type?: NotificationRelationshipsOwnerUserDataTypeEnum;
}
export declare class NotificationRelationshipsOwnerUser extends SpeakeasyBase {
    data?: NotificationRelationshipsOwnerUserData;
}
export declare class NotificationRelationshipsResourceData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class NotificationRelationshipsResource extends SpeakeasyBase {
    data?: NotificationRelationshipsResourceData;
}
export declare class NotificationRelationshipsShareData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class NotificationRelationshipsShare extends SpeakeasyBase {
    data?: NotificationRelationshipsShareData;
}
export declare class NotificationRelationships extends SpeakeasyBase {
    ownerUser?: NotificationRelationshipsOwnerUser;
    resource?: NotificationRelationshipsResource;
    share?: NotificationRelationshipsShare;
}
/**
 * Object containing notification properties.
 */
export declare class Notification extends SpeakeasyBase {
    /**
     * Attributes for the notification including the path, recipients, and share data.
     */
    attributes?: NotificationAttributes;
    id?: number;
    relationships?: NotificationRelationships;
    type?: string;
}
