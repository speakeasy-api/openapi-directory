import { SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSettingsList } from "./optiongroupoptionsettingslist";
import { OptionGroupOptionVersionsList } from "./optiongroupoptionversionslist";
/**
 * Available option.
 */
export declare class OptionGroupOptionsList extends SpeakeasyBase {
    copyableCrossAccount?: boolean;
    defaultPort?: number;
    description?: string;
    engineName?: string;
    majorEngineVersion?: string;
    minimumRequiredMinorEngineVersion?: string;
    name?: string;
    optionGroupOptionSettings?: OptionGroupOptionSettingsList[];
    optionGroupOptionVersions?: OptionGroupOptionVersionsList[];
    optionsConflictsWith?: string[];
    optionsDependedOn?: string[];
    permanent?: boolean;
    persistent?: boolean;
    portRequired?: boolean;
    requiresAutoMinorEngineVersionUpgrade?: boolean;
    supportsOptionVersionDowngrade?: boolean;
    vpcOnly?: boolean;
}
