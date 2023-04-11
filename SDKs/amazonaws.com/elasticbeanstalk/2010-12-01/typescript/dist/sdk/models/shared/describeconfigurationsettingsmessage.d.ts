import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Result message containing all of the configuration settings for a specified solution stack or configuration template.
 */
export declare class DescribeConfigurationSettingsMessage extends SpeakeasyBase {
    applicationName: string;
    environmentName?: string;
    templateName?: string;
}
