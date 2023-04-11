import { SpeakeasyBase } from "../../../internal/utils";
import { AccessTypeEnum } from "./accesstypeenum";
import { EnvironmentAccessModel } from "./environmentaccessmodel";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";
export declare class PermissionGroupModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class PermissionGroupModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: PermissionGroupModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class PermissionGroupModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: PermissionGroupModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class PermissionGroupModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    segments?: string;
    self?: string;
    tags?: string;
}
export declare class PermissionGroupModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: PermissionGroupModelHaljsonEmbeddedProductEmbedded;
    links?: PermissionGroupModelHaljsonEmbeddedProductLinks;
    description?: string;
    name?: string;
    order?: number;
    productId?: string;
    reasonRequired?: boolean;
}
export declare class PermissionGroupModelHaljsonEmbedded extends SpeakeasyBase {
    product?: PermissionGroupModelHaljsonEmbeddedProduct;
}
export declare class PermissionGroupModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
/**
 * When everything is ok, the permission group data returned.
 */
export declare class PermissionGroupModelHaljson extends SpeakeasyBase {
    embedded?: PermissionGroupModelHaljsonEmbedded;
    links?: PermissionGroupModelHaljsonLinks;
    accessType?: AccessTypeEnum;
    canCreateOrUpdateConfig?: boolean;
    canCreateOrUpdateEnvironment?: boolean;
    canCreateOrUpdateSegments?: boolean;
    canCreateOrUpdateSetting?: boolean;
    canCreateOrUpdateTag?: boolean;
    canDeleteConfig?: boolean;
    canDeleteEnvironment?: boolean;
    canDeleteSegments?: boolean;
    canDeleteSetting?: boolean;
    canDeleteTag?: boolean;
    canManageIntegrations?: boolean;
    canManageMembers?: boolean;
    canManageProductPreferences?: boolean;
    canManageWebhook?: boolean;
    canRotateSDKKey?: boolean;
    canTagSetting?: boolean;
    canUseExportImport?: boolean;
    canViewProductAuditLog?: boolean;
    canViewProductStatistics?: boolean;
    canViewSDKKey?: boolean;
    environmentAccesses?: EnvironmentAccessModel[];
    name?: string;
    newEnvironmentAccessType?: EnvironmentAccessTypeEnum;
    permissionGroupId?: number;
}
