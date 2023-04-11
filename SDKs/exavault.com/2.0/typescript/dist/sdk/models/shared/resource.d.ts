import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceAttributes } from "./resourceattributes";
export declare class ResourceRelationshipsDirectFileData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class ResourceRelationshipsDirectFile extends SpeakeasyBase {
    data?: ResourceRelationshipsDirectFileData;
}
export declare class ResourceRelationshipsNotificationsData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class ResourceRelationshipsNotifications extends SpeakeasyBase {
    data?: ResourceRelationshipsNotificationsData;
}
export declare class ResourceRelationshipsParentResourceData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class ResourceRelationshipsParentResource extends SpeakeasyBase {
    data?: ResourceRelationshipsParentResourceData;
}
export declare class ResourceRelationshipsShareData extends SpeakeasyBase {
    id?: number;
    type?: string;
}
export declare class ResourceRelationshipsShare extends SpeakeasyBase {
    data?: ResourceRelationshipsShareData;
}
export declare class ResourceRelationships extends SpeakeasyBase {
    directFile?: ResourceRelationshipsDirectFile;
    notifications?: ResourceRelationshipsNotifications[];
    parentResource?: ResourceRelationshipsParentResource;
    share?: ResourceRelationshipsShare;
}
/**
 * Type of item. "resource"
 */
export declare enum ResourceTypeEnum {
    Resource = "resource"
}
/**
 * All properties of the resource.
 */
export declare class Resource extends SpeakeasyBase {
    /**
     * Attributes of resource
     */
    attributes?: ResourceAttributes;
    id?: number;
    relationships?: ResourceRelationships;
    /**
     * Type of item. "resource"
     */
    type?: ResourceTypeEnum;
}
