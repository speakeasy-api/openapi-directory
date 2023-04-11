import { SpeakeasyBase } from "../../../internal/utils";
import { ArtifactTypeEnum } from "./artifacttypeenum";
import { MavenReference } from "./mavenreference";
import { S3ContentLocation } from "./s3contentlocation";
/**
 * Specifies a dependency JAR or a JAR of user-defined functions.
 */
export declare class CustomArtifactConfigurationDescription extends SpeakeasyBase {
    artifactType?: ArtifactTypeEnum;
    mavenReferenceDescription?: MavenReference;
    /**
     * For a Kinesis Data Analytics application provides a description of an Amazon S3 object, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
     */
    s3ContentLocationDescription?: S3ContentLocation;
}
