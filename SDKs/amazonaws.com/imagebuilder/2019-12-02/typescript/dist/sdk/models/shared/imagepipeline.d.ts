import { SpeakeasyBase } from "../../../internal/utils";
import { ImageTestsConfiguration } from "./imagetestsconfiguration";
import { PipelineStatusEnum } from "./pipelinestatusenum";
import { PlatformEnum } from "./platformenum";
import { Schedule } from "./schedule";
/**
 * Details of an image pipeline.
 */
export declare class ImagePipeline extends SpeakeasyBase {
    arn?: string;
    containerRecipeArn?: string;
    dateCreated?: string;
    dateLastRun?: string;
    dateNextRun?: string;
    dateUpdated?: string;
    description?: string;
    distributionConfigurationArn?: string;
    enhancedImageMetadataEnabled?: boolean;
    imageRecipeArn?: string;
    imageTestsConfiguration?: ImageTestsConfiguration;
    infrastructureConfigurationArn?: string;
    name?: string;
    platform?: PlatformEnum;
    schedule?: Schedule;
    status?: PipelineStatusEnum;
    tags?: Record<string, string>;
}
