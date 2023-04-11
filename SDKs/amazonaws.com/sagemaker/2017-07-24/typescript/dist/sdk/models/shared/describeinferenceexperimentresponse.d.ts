import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointMetadata } from "./endpointmetadata";
import { InferenceExperimentDataStorageConfig } from "./inferenceexperimentdatastorageconfig";
import { InferenceExperimentSchedule } from "./inferenceexperimentschedule";
import { InferenceExperimentStatusEnum } from "./inferenceexperimentstatusenum";
import { InferenceExperimentTypeEnum } from "./inferenceexperimenttypeenum";
import { ModelVariantConfigSummary } from "./modelvariantconfigsummary";
import { ShadowModeConfig } from "./shadowmodeconfig";
/**
 * Success
 */
export declare class DescribeInferenceExperimentResponse extends SpeakeasyBase {
    arn: string;
    completionTime?: Date;
    creationTime?: Date;
    dataStorageConfig?: InferenceExperimentDataStorageConfig;
    description?: string;
    endpointMetadata: EndpointMetadata;
    kmsKey?: string;
    lastModifiedTime?: Date;
    modelVariants: ModelVariantConfigSummary[];
    name: string;
    roleArn?: string;
    schedule?: InferenceExperimentSchedule;
    shadowModeConfig?: ShadowModeConfig;
    status: InferenceExperimentStatusEnum;
    statusReason?: string;
    type: InferenceExperimentTypeEnum;
}
