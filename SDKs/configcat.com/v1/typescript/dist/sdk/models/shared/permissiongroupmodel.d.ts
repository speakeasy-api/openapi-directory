import { SpeakeasyBase } from "../../../internal/utils";
import { AccessTypeEnum } from "./accesstypeenum";
import { EnvironmentAccessModel } from "./environmentaccessmodel";
import { EnvironmentAccessTypeEnum } from "./environmentaccesstypeenum";
import { ProductModel } from "./productmodel";
/**
 * When everything is ok, the permission group data returned.
 */
export declare class PermissionGroupModel extends SpeakeasyBase {
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
    product?: ProductModel;
}
