import { SpeakeasyBase } from "../../../internal/utils";
import { JobCommand } from "./jobcommand";
import { ConnectionsList } from "./connectionslist";
import { ExecutionProperty } from "./executionproperty";
import { NotificationProperty } from "./notificationproperty";
import { WorkerTypeEnum } from "./workertypeenum";
/**
 * Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
**/
export declare class JobUpdate extends SpeakeasyBase {
    allocatedCapacity?: Record<string, any>;
    command?: JobCommand;
    connections?: ConnectionsList;
    defaultArguments?: Record<string, string>;
    description?: string;
    executionProperty?: ExecutionProperty;
    glueVersion?: string;
    logUri?: string;
    maxCapacity?: number;
    maxRetries?: number;
    nonOverridableArguments?: Record<string, string>;
    notificationProperty?: NotificationProperty;
    numberOfWorkers?: number;
    role?: string;
    securityConfiguration?: string;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}
