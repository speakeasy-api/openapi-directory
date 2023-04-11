import { SpeakeasyBase } from "../../../internal/utils";
import { InferenceExperimentSchedule } from "./inferenceexperimentschedule";
import { InferenceExperimentStatusEnum } from "./inferenceexperimentstatusenum";
import { InferenceExperimentTypeEnum } from "./inferenceexperimenttypeenum";
/**
 * Lists a summary of properties of an inference experiment.
 */
export declare class InferenceExperimentSummary extends SpeakeasyBase {
    completionTime?: Date;
    creationTime: Date;
    description?: string;
    lastModifiedTime: Date;
    name: string;
    roleArn?: string;
    schedule?: InferenceExperimentSchedule;
    status: InferenceExperimentStatusEnum;
    statusReason?: string;
    type: InferenceExperimentTypeEnum;
}
