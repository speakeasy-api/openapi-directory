import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";
import { SourceConfiguration } from "./sourceconfiguration";
import { Tag } from "./tag";
/**
 * Request to create a configuration template.
 */
export declare class CreateConfigurationTemplateMessage extends SpeakeasyBase {
    applicationName: string;
    description?: string;
    environmentId?: string;
    optionSettings?: ConfigurationOptionSetting[];
    platformArn?: string;
    solutionStackName?: string;
    sourceConfiguration?: SourceConfiguration;
    tags?: Tag[];
    templateName: string;
}
