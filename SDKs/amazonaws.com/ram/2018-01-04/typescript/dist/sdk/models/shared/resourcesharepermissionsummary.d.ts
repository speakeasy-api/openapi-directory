import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an RAM permission that is associated with a resource share and any of its resources of a specified type.
 */
export declare class ResourceSharePermissionSummary extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    defaultVersion?: boolean;
    isResourceTypeDefault?: boolean;
    lastUpdatedTime?: Date;
    name?: string;
    resourceType?: string;
    status?: string;
    version?: string;
}
