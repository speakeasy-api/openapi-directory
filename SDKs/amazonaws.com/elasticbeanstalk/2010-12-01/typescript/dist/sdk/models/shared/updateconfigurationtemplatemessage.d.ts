import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";
import { OptionSpecification } from "./optionspecification";
/**
 * The result message containing the options for the specified solution stack.
 */
export declare class UpdateConfigurationTemplateMessage extends SpeakeasyBase {
    applicationName: string;
    description?: string;
    optionSettings?: ConfigurationOptionSetting[];
    optionsToRemove?: OptionSpecification[];
    templateName: string;
}
