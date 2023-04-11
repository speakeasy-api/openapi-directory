import { SpeakeasyBase } from "../../../internal/utils";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AppSecurityGroupManagementEnum } from "./appsecuritygroupmanagementenum";
import { AuthModeEnum } from "./authmodeenum";
import { DefaultSpaceSettings } from "./defaultspacesettings";
import { DomainSettings } from "./domainsettings";
import { DomainStatusEnum } from "./domainstatusenum";
import { UserSettings } from "./usersettings";
/**
 * Success
 */
export declare class DescribeDomainResponse extends SpeakeasyBase {
    appNetworkAccessType?: AppNetworkAccessTypeEnum;
    appSecurityGroupManagement?: AppSecurityGroupManagementEnum;
    authMode?: AuthModeEnum;
    creationTime?: Date;
    defaultSpaceSettings?: DefaultSpaceSettings;
    defaultUserSettings?: UserSettings;
    domainArn?: string;
    domainId?: string;
    domainName?: string;
    domainSettings?: DomainSettings;
    failureReason?: string;
    homeEfsFileSystemId?: string;
    homeEfsFileSystemKmsKeyId?: string;
    kmsKeyId?: string;
    lastModifiedTime?: Date;
    securityGroupIdForDomainBoundary?: string;
    singleSignOnManagedApplicationInstanceId?: string;
    status?: DomainStatusEnum;
    subnetIds?: string[];
    url?: string;
    vpcId?: string;
}
