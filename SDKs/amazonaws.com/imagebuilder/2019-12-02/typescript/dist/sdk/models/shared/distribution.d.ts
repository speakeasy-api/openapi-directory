import { SpeakeasyBase } from "../../../internal/utils";
import { AmiDistributionConfiguration } from "./amidistributionconfiguration";
import { ContainerDistributionConfiguration } from "./containerdistributionconfiguration";
import { FastLaunchConfiguration } from "./fastlaunchconfiguration";
import { LaunchTemplateConfiguration } from "./launchtemplateconfiguration";
import { S3ExportConfiguration } from "./s3exportconfiguration";
/**
 *  Defines the settings for a specific Region.
 */
export declare class Distribution extends SpeakeasyBase {
    amiDistributionConfiguration?: AmiDistributionConfiguration;
    containerDistributionConfiguration?: ContainerDistributionConfiguration;
    fastLaunchConfigurations?: FastLaunchConfiguration[];
    launchTemplateConfigurations?: LaunchTemplateConfiguration[];
    licenseConfigurationArns?: string[];
    region: string;
    s3ExportConfiguration?: S3ExportConfiguration;
}
