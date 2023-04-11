import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
import { Experiment } from "./experiment";
import { FeatureGroup } from "./featuregroup";
import { FeatureMetadata } from "./featuremetadata";
import { HyperParameterTuningJobSearchEntity } from "./hyperparametertuningjobsearchentity";
import { ModelCard } from "./modelcard";
import { ModelDashboardModel } from "./modeldashboardmodel";
import { ModelPackage } from "./modelpackage";
import { ModelPackageGroup } from "./modelpackagegroup";
import { Pipeline } from "./pipeline";
import { PipelineExecution } from "./pipelineexecution";
import { Project } from "./project";
import { TrainingJob } from "./trainingjob";
import { Trial } from "./trial";
import { TrialComponent } from "./trialcomponent";
/**
 * A single resource returned as part of the <a>Search</a> API response.
 */
export declare class SearchRecord extends SpeakeasyBase {
    /**
     * A hosted endpoint for real-time inference.
     */
    endpoint?: Endpoint;
    experiment?: Experiment;
    /**
     * Amazon SageMaker Feature Store stores features in a collection called Feature Group. A Feature Group can be visualized as a table which has rows, with a unique identifier for each row where each column in the table is a feature. In principle, a Feature Group is composed of features and values per features.
     */
    featureGroup?: FeatureGroup;
    featureMetadata?: FeatureMetadata;
    hyperParameterTuningJob?: HyperParameterTuningJobSearchEntity;
    /**
     * A model displayed in the Amazon SageMaker Model Dashboard.
     */
    model?: ModelDashboardModel;
    modelCard?: ModelCard;
    /**
     * A versioned model that can be deployed for SageMaker inference.
     */
    modelPackage?: ModelPackage;
    /**
     * A group of versioned models in the model registry.
     */
    modelPackageGroup?: ModelPackageGroup;
    /**
     * A SageMaker Model Building Pipeline instance.
     */
    pipeline?: Pipeline;
    /**
     * An execution of a pipeline.
     */
    pipelineExecution?: PipelineExecution;
    project?: Project;
    trainingJob?: TrainingJob;
    trial?: Trial;
    trialComponent?: TrialComponent;
}
