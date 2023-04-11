import { SpeakeasyBase } from "../../../internal/utils";
import { CodeGenConfigurationNode } from "./codegenconfigurationnode";
import { ConnectionsList } from "./connectionslist";
import { ExecutionClassEnum } from "./executionclassenum";
import { ExecutionProperty } from "./executionproperty";
import { JobCommand } from "./jobcommand";
import { NotificationProperty } from "./notificationproperty";
import { SourceControlDetails } from "./sourcecontroldetails";
import { WorkerTypeEnum } from "./workertypeenum";
/**
 * Specifies a job definition.
 */
export declare class Job extends SpeakeasyBase {
    allocatedCapacity?: number;
    codeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
    command?: JobCommand;
    connections?: ConnectionsList;
    createdOn?: Date;
    defaultArguments?: Record<string, string>;
    description?: string;
    executionClass?: ExecutionClassEnum;
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
    sourceControlDetails?: SourceControlDetails;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}
