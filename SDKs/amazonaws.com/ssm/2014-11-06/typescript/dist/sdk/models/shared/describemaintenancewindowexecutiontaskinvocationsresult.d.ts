import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionTaskInvocationIdentity } from "./maintenancewindowexecutiontaskinvocationidentity";
/**
 * Success
 */
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsResult extends SpeakeasyBase {
    nextToken?: string;
    windowExecutionTaskInvocationIdentities?: MaintenanceWindowExecutionTaskInvocationIdentity[];
}
