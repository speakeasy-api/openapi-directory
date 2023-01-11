import { SpeakeasyBase } from "../../../internal/utils";
import { JobCommand } from "./jobcommand";
import { ConnectionsList } from "./connectionslist";
import { ExecutionProperty } from "./executionproperty";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";
export declare class CreateJobRequest extends SpeakeasyBase {
    allocatedCapacity?: Record<string, any>;
    command: JobCommand;
    connections?: ConnectionsList;
    defaultArguments?: Record<string, string>;
    description?: string;
    executionProperty?: ExecutionProperty;
    glueVersion?: string;
    logUri?: string;
    maxCapacity?: number;
    maxRetries?: number;
    name: string;
    nonOverridableArguments?: Record<string, string>;
    notificationProperty?: NotificationProperty;
    numberOfWorkers?: number;
    role: string;
    securityConfiguration?: string;
    tags?: Record<string, string>;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}
