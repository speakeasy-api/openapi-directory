import { SpeakeasyBase } from "../../../internal/utils";
import { BuildConfiguration } from "./buildconfiguration";
import { S3Location } from "./s3location";
import { SourceBuildInformation } from "./sourcebuildinformation";
import { Tag } from "./tag";
/**
 * <p/>
 */
export declare class CreateApplicationVersionMessage extends SpeakeasyBase {
    applicationName: string;
    autoCreateApplication?: boolean;
    buildConfiguration?: BuildConfiguration;
    description?: string;
    process?: boolean;
    sourceBuildInformation?: SourceBuildInformation;
    sourceBundle?: S3Location;
    tags?: Tag[];
    versionLabel: string;
}
