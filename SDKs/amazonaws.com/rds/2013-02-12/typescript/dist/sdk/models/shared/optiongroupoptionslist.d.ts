import { SpeakeasyBase } from "../../../internal/utils";
import { OptionGroupOptionSettingsList } from "./optiongroupoptionsettingslist";
export declare class OptionGroupOptionsList extends SpeakeasyBase {
    defaultPort?: number;
    description?: string;
    engineName?: string;
    majorEngineVersion?: string;
    minimumRequiredMinorEngineVersion?: string;
    name?: string;
    optionGroupOptionSettings?: OptionGroupOptionSettingsList[];
    optionsDependedOn?: Record<string, any>[];
    persistent?: boolean;
    portRequired?: boolean;
}
