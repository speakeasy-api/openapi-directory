import { SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSettingsList } from "./optiongroupoptionsettingslist";
import { OptionGroupOptionVersionsList } from "./optiongroupoptionversionslist";
/**
 * Available option.
**/
export declare class OptionGroupOptionsList extends SpeakeasyBase {
    defaultPort?: number;
    description?: string;
    engineName?: string;
    majorEngineVersion?: string;
    minimumRequiredMinorEngineVersion?: string;
    name?: string;
    optionGroupOptionSettings?: OptionGroupOptionSettingsList[];
    optionGroupOptionVersions?: OptionGroupOptionVersionsList[];
    optionsConflictsWith?: Record<string, any>[];
    optionsDependedOn?: Record<string, any>[];
    permanent?: boolean;
    persistent?: boolean;
    portRequired?: boolean;
    requiresAutoMinorEngineVersionUpgrade?: boolean;
    supportsOptionVersionDowngrade?: boolean;
    vpcOnly?: boolean;
}
