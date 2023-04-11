import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformTypeEnum } from "./platformtypeenum";
import { S3Location } from "./s3location";
export declare class CreateApplicationRequest extends SpeakeasyBase {
    appBlockArn: string;
    description?: string;
    displayName?: string;
    iconS3Location: S3Location;
    instanceFamilies: string[];
    launchParameters?: string;
    launchPath: string;
    name: string;
    platforms: PlatformTypeEnum[];
    tags?: Record<string, string>;
    workingDirectory?: string;
}
