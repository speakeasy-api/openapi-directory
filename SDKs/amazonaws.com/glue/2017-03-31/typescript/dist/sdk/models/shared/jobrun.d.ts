import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionClassEnum } from "./executionclassenum";
import { JobRunStateEnum } from "./jobrunstateenum";
import { NotificationProperty } from "./notificationproperty";
import { Predecessor } from "./predecessor";
import { WorkerTypeEnum } from "./workertypeenum";
/**
 * Contains information about a job run.
 */
export declare class JobRun extends SpeakeasyBase {
    allocatedCapacity?: number;
    arguments?: Record<string, string>;
    attempt?: number;
    completedOn?: Date;
    dpuSeconds?: number;
    errorMessage?: string;
    executionClass?: ExecutionClassEnum;
    executionTime?: number;
    glueVersion?: string;
    id?: string;
    jobName?: string;
    jobRunState?: JobRunStateEnum;
    lastModifiedOn?: Date;
    logGroupName?: string;
    maxCapacity?: number;
    notificationProperty?: NotificationProperty;
    numberOfWorkers?: number;
    predecessorRuns?: Predecessor[];
    previousRunId?: string;
    securityConfiguration?: string;
    startedOn?: Date;
    timeout?: number;
    triggerName?: string;
    workerType?: WorkerTypeEnum;
}
