import { SpeakeasyBase } from "../../../internal/utils";
import { BatchDataCaptureConfig } from "./batchdatacaptureconfig";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";
export declare class CreateTransformJobRequest extends SpeakeasyBase {
    batchStrategy?: BatchStrategyEnum;
    dataCaptureConfig?: BatchDataCaptureConfig;
    dataProcessing?: DataProcessing;
    environment?: Record<string, string>;
    /**
     * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
     */
    experimentConfig?: ExperimentConfig;
    maxConcurrentTransforms?: number;
    maxPayloadInMB?: number;
    modelClientConfig?: ModelClientConfig;
    modelName: string;
    tags?: Tag[];
    transformInput: TransformInput;
    transformJobName: string;
    transformOutput: TransformOutput;
    transformResources: TransformResources;
}
