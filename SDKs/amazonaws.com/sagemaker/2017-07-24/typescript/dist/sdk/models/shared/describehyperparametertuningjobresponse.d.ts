import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
import { HyperParameterTuningJobCompletionDetails } from "./hyperparametertuningjobcompletiondetails";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { HyperParameterTuningJobConsumedResources } from "./hyperparametertuningjobconsumedresources";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";
/**
 * Success
 */
export declare class DescribeHyperParameterTuningJobResponse extends SpeakeasyBase {
    bestTrainingJob?: HyperParameterTrainingJobSummary;
    /**
     * The total resources consumed by your hyperparameter tuning job.
     */
    consumedResources?: HyperParameterTuningJobConsumedResources;
    creationTime: Date;
    failureReason?: string;
    hyperParameterTuningEndTime?: Date;
    hyperParameterTuningJobArn: string;
    hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
    hyperParameterTuningJobName: string;
    hyperParameterTuningJobStatus: HyperParameterTuningJobStatusEnum;
    lastModifiedTime?: Date;
    objectiveStatusCounters: ObjectiveStatusCounters;
    overallBestTrainingJob?: HyperParameterTrainingJobSummary;
    trainingJobDefinition?: HyperParameterTrainingJobDefinition;
    trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];
    trainingJobStatusCounters: TrainingJobStatusCounters;
    tuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;
    warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
