import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStrategyEnum } from "./batchstrategyenum";
import { DataProcessing } from "./dataprocessing";
import { ExperimentConfig } from "./experimentconfig";
import { ModelClientConfig } from "./modelclientconfig";
import { Tag } from "./tag";
import { TransformInput } from "./transforminput";
import { TransformJobStatusEnum } from "./transformjobstatusenum";
import { TransformOutput } from "./transformoutput";
import { TransformResources } from "./transformresources";
/**
 * A batch transform job. For information about SageMaker batch transform, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Use Batch Transform</a>.
 */
export declare class TransformJob extends SpeakeasyBase {
    autoMLJobArn?: string;
    batchStrategy?: BatchStrategyEnum;
    creationTime?: Date;
    /**
     * The data structure used to specify the data to be used for inference in a batch transform job and to associate the data that is relevant to the prediction results in the output. The input filter provided allows you to exclude input data that is not needed for inference in a batch transform job. The output filter provided allows you to include input data relevant to interpreting the predictions in the output from the job. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform-data-processing.html">Associate Prediction Results with their Corresponding Input Records</a>.
     */
    dataProcessing?: DataProcessing;
    environment?: Record<string, string>;
    /**
     * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
     */
    experimentConfig?: ExperimentConfig;
    failureReason?: string;
    labelingJobArn?: string;
    maxConcurrentTransforms?: number;
    maxPayloadInMB?: number;
    /**
     * Configures the timeout and maximum number of retries for processing a transform job invocation.
     */
    modelClientConfig?: ModelClientConfig;
    modelName?: string;
    tags?: Tag[];
    transformEndTime?: Date;
    /**
     * Describes the input source of a transform job and the way the transform job consumes it.
     */
    transformInput?: TransformInput;
    transformJobArn?: string;
    transformJobName?: string;
    transformJobStatus?: TransformJobStatusEnum;
    /**
     * Describes the results of a transform job.
     */
    transformOutput?: TransformOutput;
    /**
     * Describes the resources, including ML instance types and ML instance count, to use for transform job.
     */
    transformResources?: TransformResources;
    transformStartTime?: Date;
}
