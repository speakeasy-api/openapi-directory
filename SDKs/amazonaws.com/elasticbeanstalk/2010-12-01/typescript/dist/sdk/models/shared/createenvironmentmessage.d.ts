import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";
import { EnvironmentTier } from "./environmenttier";
import { OptionSpecification } from "./optionspecification";
import { Tag } from "./tag";
/**
 * <p/>
 */
export declare class CreateEnvironmentMessage extends SpeakeasyBase {
    applicationName: string;
    cnamePrefix?: string;
    description?: string;
    environmentName?: string;
    groupName?: string;
    operationsRole?: string;
    optionSettings?: ConfigurationOptionSetting[];
    optionsToRemove?: OptionSpecification[];
    platformArn?: string;
    solutionStackName?: string;
    tags?: Tag[];
    templateName?: string;
    tier?: EnvironmentTier;
    versionLabel?: string;
}
