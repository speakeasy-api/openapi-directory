import { SpeakeasyBase } from "../../../internal/utils";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";
import { Tag } from "./tag";
/**
 * An Amazon SageMaker processing job that is used to analyze data and evaluate models. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/processing-job.html">Process Data and Evaluate Models</a>.
 */
export declare class ProcessingJob extends SpeakeasyBase {
    /**
     * Configuration to run a processing job in a specified container image.
     */
    appSpecification?: AppSpecification;
    autoMLJobArn?: string;
    creationTime?: Date;
    environment?: Record<string, string>;
    exitMessage?: string;
    /**
     * <p>Associates a SageMaker job as a trial component with an experiment and trial. Specified when you call the following APIs:</p> <ul> <li> <p> <a>CreateProcessingJob</a> </p> </li> <li> <p> <a>CreateTrainingJob</a> </p> </li> <li> <p> <a>CreateTransformJob</a> </p> </li> </ul>
     */
    experimentConfig?: ExperimentConfig;
    failureReason?: string;
    lastModifiedTime?: Date;
    monitoringScheduleArn?: string;
    /**
     * Networking options for a job, such as network traffic encryption between containers, whether to allow inbound and outbound network calls to and from containers, and the VPC subnets and security groups to use for VPC-enabled jobs.
     */
    networkConfig?: NetworkConfig;
    processingEndTime?: Date;
    processingInputs?: ProcessingInput[];
    processingJobArn?: string;
    processingJobName?: string;
    processingJobStatus?: ProcessingJobStatusEnum;
    /**
     * Configuration for uploading output from the processing container.
     */
    processingOutputConfig?: ProcessingOutputConfig;
    /**
     * Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
     */
    processingResources?: ProcessingResources;
    processingStartTime?: Date;
    roleArn?: string;
    /**
     * Configures conditions under which the processing job should be stopped, such as how long the processing job has been running. After the condition is met, the processing job is stopped.
     */
    stoppingCondition?: ProcessingStoppingCondition;
    tags?: Tag[];
    trainingJobArn?: string;
}
