import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLJobStepMetadata } from "./automljobstepmetadata";
import { CallbackStepMetadata } from "./callbackstepmetadata";
import { ClarifyCheckStepMetadata } from "./clarifycheckstepmetadata";
import { ConditionStepMetadata } from "./conditionstepmetadata";
import { EMRStepMetadata } from "./emrstepmetadata";
import { FailStepMetadata } from "./failstepmetadata";
import { LambdaStepMetadata } from "./lambdastepmetadata";
import { ModelStepMetadata } from "./modelstepmetadata";
import { ProcessingJobStepMetadata } from "./processingjobstepmetadata";
import { QualityCheckStepMetadata } from "./qualitycheckstepmetadata";
import { RegisterModelStepMetadata } from "./registermodelstepmetadata";
import { TrainingJobStepMetadata } from "./trainingjobstepmetadata";
import { TransformJobStepMetadata } from "./transformjobstepmetadata";
import { TuningJobStepMetaData } from "./tuningjobstepmetadata";
/**
 * Metadata for a step execution.
 */
export declare class PipelineExecutionStepMetadata extends SpeakeasyBase {
    autoMLJob?: AutoMLJobStepMetadata;
    callback?: CallbackStepMetadata;
    clarifyCheck?: ClarifyCheckStepMetadata;
    condition?: ConditionStepMetadata;
    emr?: EMRStepMetadata;
    fail?: FailStepMetadata;
    lambda?: LambdaStepMetadata;
    model?: ModelStepMetadata;
    processingJob?: ProcessingJobStepMetadata;
    qualityCheck?: QualityCheckStepMetadata;
    registerModel?: RegisterModelStepMetadata;
    trainingJob?: TrainingJobStepMetadata;
    transformJob?: TransformJobStepMetadata;
    tuningJob?: TuningJobStepMetaData;
}
