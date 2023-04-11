import { SpeakeasyBase } from "../../../internal/utils";
import { OptionSettingsList } from "./optionsettingslist";
export declare class OptionConfigurationList extends SpeakeasyBase {
    dbSecurityGroupMemberships?: string[];
    optionName: string;
    optionSettings?: OptionSettingsList[];
    port?: number;
    vpcSecurityGroupMemberships?: string[];
}
