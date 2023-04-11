import { SpeakeasyBase } from "../../../internal/utils";
import { AlgorithmSpecification } from "./algorithmspecification";
import { DeviceConfig } from "./deviceconfig";
import { InputFileConfig } from "./inputfileconfig";
import { InstanceConfig } from "./instanceconfig";
import { JobCheckpointConfig } from "./jobcheckpointconfig";
import { JobEventDetails } from "./jobeventdetails";
import { JobOutputDataConfig } from "./joboutputdataconfig";
import { JobPrimaryStatusEnum } from "./jobprimarystatusenum";
import { JobStoppingCondition } from "./jobstoppingcondition";
/**
 * Success
 */
export declare class GetJobResponse extends SpeakeasyBase {
    algorithmSpecification: AlgorithmSpecification;
    billableDuration?: number;
    checkpointConfig?: JobCheckpointConfig;
    createdAt: Date;
    deviceConfig?: DeviceConfig;
    endedAt?: Date;
    events?: JobEventDetails[];
    failureReason?: string;
    hyperParameters?: Record<string, string>;
    inputDataConfig?: InputFileConfig[];
    instanceConfig: InstanceConfig;
    jobArn: string;
    jobName: string;
    outputDataConfig: JobOutputDataConfig;
    roleArn: string;
    startedAt?: Date;
    status: JobPrimaryStatusEnum;
    stoppingCondition?: JobStoppingCondition;
    tags?: Record<string, string>;
}
