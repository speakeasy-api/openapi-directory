import { SpeakeasyBase } from "../../../internal/utils";
import { MinimumEngineVersionPerAllowedValueList } from "./minimumengineversionperallowedvaluelist";
/**
 * Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.
 */
export declare class OptionGroupOptionSettingsList extends SpeakeasyBase {
    allowedValues?: string;
    applyType?: string;
    defaultValue?: string;
    isModifiable?: boolean;
    isRequired?: boolean;
    minimumEngineVersionPerAllowedValue?: MinimumEngineVersionPerAllowedValueList[];
    settingDescription?: string;
    settingName?: string;
}
