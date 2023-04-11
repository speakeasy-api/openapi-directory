import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTrainingJobSummary } from "./hyperparametertrainingjobsummary";
import { HyperParameterTuningJobCompletionDetails } from "./hyperparametertuningjobcompletiondetails";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { HyperParameterTuningJobConsumedResources } from "./hyperparametertuningjobconsumedresources";
import { HyperParameterTuningJobStatusEnum } from "./hyperparametertuningjobstatusenum";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";
import { ObjectiveStatusCounters } from "./objectivestatuscounters";
import { Tag } from "./tag";
import { TrainingJobStatusCounters } from "./trainingjobstatuscounters";
/**
 * An entity returned by the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_SearchRecord.html">SearchRecord</a> API containing the properties of a hyperparameter tuning job.
 */
export declare class HyperParameterTuningJobSearchEntity extends SpeakeasyBase {
    /**
     * The container for the summary information about a training job.
     */
    bestTrainingJob?: HyperParameterTrainingJobSummary;
    consumedResources?: HyperParameterTuningJobConsumedResources;
    creationTime?: Date;
    failureReason?: string;
    hyperParameterTuningEndTime?: Date;
    hyperParameterTuningJobArn?: string;
    /**
     * Configures a hyperparameter tuning job.
     */
    hyperParameterTuningJobConfig?: HyperParameterTuningJobConfig;
    hyperParameterTuningJobName?: string;
    hyperParameterTuningJobStatus?: HyperParameterTuningJobStatusEnum;
    lastModifiedTime?: Date;
    /**
     * Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.
     */
    objectiveStatusCounters?: ObjectiveStatusCounters;
    /**
     * The container for the summary information about a training job.
     */
    overallBestTrainingJob?: HyperParameterTrainingJobSummary;
    tags?: Tag[];
    /**
     * Defines the training jobs launched by a hyperparameter tuning job.
     */
    trainingJobDefinition?: HyperParameterTrainingJobDefinition;
    trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];
    /**
     * The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.
     */
    trainingJobStatusCounters?: TrainingJobStatusCounters;
    tuningJobCompletionDetails?: HyperParameterTuningJobCompletionDetails;
    /**
     * <p>Specifies the configuration for a hyperparameter tuning job that uses one or more previous hyperparameter tuning jobs as a starting point. The results of previous tuning jobs are used to inform which combinations of hyperparameters to search over in the new tuning job.</p> <p>All training jobs launched by the new hyperparameter tuning job are evaluated by using the objective metric, and the training job that performs the best is compared to the best training jobs from the parent tuning jobs. From these, the training job that performs the best as measured by the objective metric is returned as the overall best training job.</p> <note> <p>All training jobs launched by parent hyperparameter tuning jobs and the new hyperparameter tuning jobs count against the limit of training jobs for the tuning job.</p> </note>
     */
    warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
