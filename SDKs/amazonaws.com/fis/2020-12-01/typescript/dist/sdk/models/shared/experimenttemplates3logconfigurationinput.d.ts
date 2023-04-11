import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the configuration for experiment logging to Amazon S3.
 */
export declare class ExperimentTemplateS3LogConfigurationInput extends SpeakeasyBase {
    bucketName: string;
    prefix?: string;
}
