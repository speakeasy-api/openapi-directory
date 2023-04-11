import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformTypeEnum } from "./platformtypeenum";
import { S3Location } from "./s3location";
/**
 * Describes an application in the application catalog.
 */
export declare class Application extends SpeakeasyBase {
    appBlockArn?: string;
    arn?: string;
    createdTime?: Date;
    description?: string;
    displayName?: string;
    enabled?: boolean;
    iconS3Location?: S3Location;
    iconURL?: string;
    instanceFamilies?: string[];
    launchParameters?: string;
    launchPath?: string;
    metadata?: Record<string, string>;
    name?: string;
    platforms?: PlatformTypeEnum[];
    workingDirectory?: string;
}
