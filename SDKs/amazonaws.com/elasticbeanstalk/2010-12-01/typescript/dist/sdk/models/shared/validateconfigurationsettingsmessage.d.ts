import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";
/**
 * A list of validation messages for a specified configuration template.
 */
export declare class ValidateConfigurationSettingsMessage extends SpeakeasyBase {
    applicationName: string;
    environmentName?: string;
    optionSettings: ConfigurationOptionSetting[];
    templateName?: string;
}
