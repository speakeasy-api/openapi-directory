import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionTaskIdentity } from "./maintenancewindowexecutiontaskidentity";
/**
 * Success
 */
export declare class DescribeMaintenanceWindowExecutionTasksResult extends SpeakeasyBase {
    nextToken?: string;
    windowExecutionTaskIdentities?: MaintenanceWindowExecutionTaskIdentity[];
}
