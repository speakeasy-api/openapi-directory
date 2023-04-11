import { SpeakeasyBase } from "../../../internal/utils";
import { HyperParameterTrainingJobDefinition } from "./hyperparametertrainingjobdefinition";
import { HyperParameterTuningJobConfig } from "./hyperparametertuningjobconfig";
import { HyperParameterTuningJobWarmStartConfig } from "./hyperparametertuningjobwarmstartconfig";
import { Tag } from "./tag";
export declare class CreateHyperParameterTuningJobRequest extends SpeakeasyBase {
    hyperParameterTuningJobConfig: HyperParameterTuningJobConfig;
    hyperParameterTuningJobName: string;
    tags?: Tag[];
    trainingJobDefinition?: HyperParameterTrainingJobDefinition;
    trainingJobDefinitions?: HyperParameterTrainingJobDefinition[];
    warmStartConfig?: HyperParameterTuningJobWarmStartConfig;
}
