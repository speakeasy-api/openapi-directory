import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalInstanceConfiguration } from "./additionalinstanceconfiguration";
import { ComponentConfiguration } from "./componentconfiguration";
import { ImageTypeEnum } from "./imagetypeenum";
import { InstanceBlockDeviceMapping } from "./instanceblockdevicemapping";
import { PlatformEnum } from "./platformenum";
/**
 * An image recipe.
 */
export declare class ImageRecipe extends SpeakeasyBase {
    additionalInstanceConfiguration?: AdditionalInstanceConfiguration;
    arn?: string;
    blockDeviceMappings?: InstanceBlockDeviceMapping[];
    components?: ComponentConfiguration[];
    dateCreated?: string;
    description?: string;
    name?: string;
    owner?: string;
    parentImage?: string;
    platform?: PlatformEnum;
    tags?: Record<string, string>;
    type?: ImageTypeEnum;
    version?: string;
    workingDirectory?: string;
}
