import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactLocationTypeEnum } from "./artifactlocationtypeenum";
import { S3ArtifactLocation } from "./s3artifactlocation";
/**
 * Represents information about the location of an artifact.
 */
export declare class ArtifactLocation extends SpeakeasyBase {
    s3Location?: S3ArtifactLocation;
    type?: ArtifactLocationTypeEnum;
}
