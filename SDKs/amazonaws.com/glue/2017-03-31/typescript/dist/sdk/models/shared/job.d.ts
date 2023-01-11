import { SpeakeasyBase } from "../../../internal/utils";
import { JobCommand } from "./jobcommand";
import { ConnectionsList } from "./connectionslist";
import { ExecutionProperty } from "./executionproperty";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";
/**
 * Specifies a job definition.
**/
export declare class Job extends SpeakeasyBase {
    allocatedCapacity?: Record<string, any>;
    command?: JobCommand;
    connections?: ConnectionsList;
    createdOn?: Date;
    defaultArguments?: Record<string, string>;
    description?: string;
    executionProperty?: ExecutionProperty;
    glueVersion?: string;
    lastModifiedOn?: Date;
    logUri?: string;
    maxCapacity?: number;
    maxRetries?: number;
    name?: string;
    nonOverridableArguments?: Record<string, string>;
    notificationProperty?: NotificationProperty;
    numberOfWorkers?: number;
    role?: string;
    securityConfiguration?: string;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}
