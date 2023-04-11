import { SpeakeasyBase } from "../../../internal/utils";
import { AutoDeployment } from "./autodeployment";
import { ManagedExecution } from "./managedexecution";
import { PermissionModelsEnum } from "./permissionmodelsenum";
import { StackDriftStatusEnum } from "./stackdriftstatusenum";
import { StackSetStatusEnum } from "./stacksetstatusenum";
/**
 * The structures that contain summary information about the specified stack set.
 */
export declare class StackSetSummary extends SpeakeasyBase {
    autoDeployment?: AutoDeployment;
    description?: string;
    driftStatus?: StackDriftStatusEnum;
    lastDriftCheckTimestamp?: Date;
    managedExecution?: ManagedExecution;
    permissionModel?: PermissionModelsEnum;
    stackSetId?: string;
    stackSetName?: string;
    status?: StackSetStatusEnum;
}
