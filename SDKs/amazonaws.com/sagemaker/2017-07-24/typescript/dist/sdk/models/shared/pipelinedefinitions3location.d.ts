import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The location of the pipeline definition stored in Amazon S3.
 */
export declare class PipelineDefinitionS3Location extends SpeakeasyBase {
    bucket: string;
    objectKey: string;
    versionId?: string;
}
