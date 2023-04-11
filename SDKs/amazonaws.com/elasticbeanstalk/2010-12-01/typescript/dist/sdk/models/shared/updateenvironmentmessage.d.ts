import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";
import { EnvironmentTier } from "./environmenttier";
import { OptionSpecification } from "./optionspecification";
/**
 * Request to update an environment.
 */
export declare class UpdateEnvironmentMessage extends SpeakeasyBase {
    applicationName?: string;
    description?: string;
    environmentId?: string;
    environmentName?: string;
    groupName?: string;
    optionSettings?: ConfigurationOptionSetting[];
    optionsToRemove?: OptionSpecification[];
    platformArn?: string;
    solutionStackName?: string;
    templateName?: string;
    tier?: EnvironmentTier;
    versionLabel?: string;
}
