import { SpeakeasyBase } from "../../../internal/utils";
import { FinalHyperParameterTuningJobObjectiveMetric } from "./finalhyperparametertuningjobobjectivemetric";
import { ObjectiveStatusEnum } from "./objectivestatusenum";
import { TrainingJobStatusEnum } from "./trainingjobstatusenum";
/**
 * The container for the summary information about a training job.
 */
export declare class HyperParameterTrainingJobSummary extends SpeakeasyBase {
    creationTime: Date;
    failureReason?: string;
    finalHyperParameterTuningJobObjectiveMetric?: FinalHyperParameterTuningJobObjectiveMetric;
    objectiveStatus?: ObjectiveStatusEnum;
    trainingEndTime?: Date;
    trainingJobArn: string;
    trainingJobDefinitionName?: string;
    trainingJobName: string;
    trainingJobStatus: TrainingJobStatusEnum;
    trainingStartTime?: Date;
    tunedHyperParameters: Record<string, string>;
    tuningJobName?: string;
}
