import { SpeakeasyBase } from "../../../internal/utils";
import { AppSpecification } from "./appspecification";
import { ExperimentConfig } from "./experimentconfig";
import { NetworkConfig } from "./networkconfig";
import { ProcessingInput } from "./processinginput";
import { ProcessingJobStatusEnum } from "./processingjobstatusenum";
import { ProcessingOutputConfig } from "./processingoutputconfig";
import { ProcessingResources } from "./processingresources";
import { ProcessingStoppingCondition } from "./processingstoppingcondition";
/**
 * Success
 */
export declare class DescribeProcessingJobResponse extends SpeakeasyBase {
    appSpecification: AppSpecification;
    autoMLJobArn?: string;
    creationTime: Date;
    environment?: Record<string, string>;
    exitMessage?: string;
    experimentConfig?: ExperimentConfig;
    failureReason?: string;
    lastModifiedTime?: Date;
    monitoringScheduleArn?: string;
    networkConfig?: NetworkConfig;
    processingEndTime?: Date;
    processingInputs?: ProcessingInput[];
    processingJobArn: string;
    processingJobName: string;
    processingJobStatus: ProcessingJobStatusEnum;
    processingOutputConfig?: ProcessingOutputConfig;
    processingResources: ProcessingResources;
    processingStartTime?: Date;
    roleArn?: string;
    stoppingCondition?: ProcessingStoppingCondition;
    trainingJobArn?: string;
}
