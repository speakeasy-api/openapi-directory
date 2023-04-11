import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationVersionStatusEnum } from "./applicationversionstatusenum";
import { S3Location } from "./s3location";
import { SourceBuildInformation } from "./sourcebuildinformation";
/**
 * Describes the properties of an application version.
 */
export declare class ApplicationVersionDescription extends SpeakeasyBase {
    applicationName?: string;
    applicationVersionArn?: string;
    buildArn?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    description?: string;
    sourceBuildInformation?: SourceBuildInformation;
    sourceBundle?: S3Location;
    status?: ApplicationVersionStatusEnum;
    versionLabel?: string;
}
