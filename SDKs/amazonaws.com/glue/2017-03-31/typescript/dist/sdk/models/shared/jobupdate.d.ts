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
 * Specifies information used to update an existing job definition. The previous job definition is completely overwritten by this information.
 */
export declare class JobUpdate extends SpeakeasyBase {
    allocatedCapacity?: number;
    codeGenConfigurationNodes?: Record<string, CodeGenConfigurationNode>;
    command?: JobCommand;
    connections?: ConnectionsList;
    defaultArguments?: Record<string, string>;
    description?: string;
    executionClass?: ExecutionClassEnum;
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
    sourceControlDetails?: SourceControlDetails;
    timeout?: number;
    workerType?: WorkerTypeEnum;
}
