import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationOptionSetting } from "./configurationoptionsetting";
import { S3Location } from "./s3location";
import { Tag } from "./tag";
/**
 * Request to create a new platform version.
 */
export declare class CreatePlatformVersionRequest extends SpeakeasyBase {
    environmentName?: string;
    optionSettings?: ConfigurationOptionSetting[];
    platformDefinitionBundle: S3Location;
    platformName: string;
    platformVersion: string;
    tags?: Tag[];
}
