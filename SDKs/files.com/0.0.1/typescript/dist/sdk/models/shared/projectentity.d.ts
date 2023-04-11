import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Global access settings
 */
export declare enum ProjectEntityGlobalAccessEnum {
    None = "none",
    AnyoneWithRead = "anyone_with_read",
    AnyoneWithFull = "anyone_with_full"
}
/**
 * List Projects
 */
export declare class ProjectEntity extends SpeakeasyBase {
    /**
     * Global access settings
     */
    globalAccess?: ProjectEntityGlobalAccessEnum;
    /**
     * Project ID
     */
    id?: number;
}
