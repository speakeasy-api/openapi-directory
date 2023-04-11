import { SpeakeasyBase } from "../../../internal/utils";
import { OptionSettingsList } from "./optionsettingslist";
/**
 * A list of all available options
 */
export declare class OptionConfigurationList extends SpeakeasyBase {
    dbSecurityGroupMemberships?: string[];
    optionName: string;
    optionSettings?: OptionSettingsList[];
    optionVersion?: string;
    port?: number;
    vpcSecurityGroupMemberships?: string[];
}
