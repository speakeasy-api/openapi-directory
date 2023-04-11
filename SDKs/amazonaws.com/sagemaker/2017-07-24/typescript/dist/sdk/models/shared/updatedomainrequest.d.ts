import { SpeakeasyBase } from "../../../internal/utils";
import { AppSecurityGroupManagementEnum } from "./appsecuritygroupmanagementenum";
import { DefaultSpaceSettings } from "./defaultspacesettings";
import { DomainSettingsForUpdate } from "./domainsettingsforupdate";
import { UserSettings } from "./usersettings";
export declare class UpdateDomainRequest extends SpeakeasyBase {
    appSecurityGroupManagement?: AppSecurityGroupManagementEnum;
    defaultSpaceSettings?: DefaultSpaceSettings;
    defaultUserSettings?: UserSettings;
    domainId: string;
    domainSettingsForUpdate?: DomainSettingsForUpdate;
}
