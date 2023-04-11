import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateBasedAuthProperties } from "./certificatebasedauthproperties";
import { DefaultWorkspaceCreationProperties } from "./defaultworkspacecreationproperties";
import { SamlProperties } from "./samlproperties";
import { SelfservicePermissions } from "./selfservicepermissions";
import { TenancyEnum } from "./tenancyenum";
import { WorkspaceAccessProperties } from "./workspaceaccessproperties";
import { WorkspaceDirectoryStateEnum } from "./workspacedirectorystateenum";
import { WorkspaceDirectoryTypeEnum } from "./workspacedirectorytypeenum";
/**
 * Describes a directory that is used with Amazon WorkSpaces.
 */
export declare class WorkspaceDirectory extends SpeakeasyBase {
    alias?: string;
    certificateBasedAuthProperties?: CertificateBasedAuthProperties;
    customerUserName?: string;
    directoryId?: string;
    directoryName?: string;
    directoryType?: WorkspaceDirectoryTypeEnum;
    dnsIpAddresses?: string[];
    iamRoleId?: string;
    registrationCode?: string;
    samlProperties?: SamlProperties;
    selfservicePermissions?: SelfservicePermissions;
    state?: WorkspaceDirectoryStateEnum;
    subnetIds?: string[];
    tenancy?: TenancyEnum;
    workspaceAccessProperties?: WorkspaceAccessProperties;
    workspaceCreationProperties?: DefaultWorkspaceCreationProperties;
    workspaceSecurityGroupId?: string;
    ipGroupIds?: string[];
}
