import { SpeakeasyBase } from "../../../internal/utils";
import { AppNetworkAccessTypeEnum } from "./appnetworkaccesstypeenum";
import { AppSecurityGroupManagementEnum } from "./appsecuritygroupmanagementenum";
import { AuthModeEnum } from "./authmodeenum";
import { DefaultSpaceSettings } from "./defaultspacesettings";
import { DomainSettings } from "./domainsettings";
import { Tag } from "./tag";
import { UserSettings } from "./usersettings";
export declare class CreateDomainRequest extends SpeakeasyBase {
    appNetworkAccessType?: AppNetworkAccessTypeEnum;
    appSecurityGroupManagement?: AppSecurityGroupManagementEnum;
    authMode: AuthModeEnum;
    defaultSpaceSettings?: DefaultSpaceSettings;
    defaultUserSettings: UserSettings;
    domainName: string;
    domainSettings?: DomainSettings;
    homeEfsFileSystemKmsKeyId?: string;
    kmsKeyId?: string;
    subnetIds: string[];
    tags?: Tag[];
    vpcId: string;
}
