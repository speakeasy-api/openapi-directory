import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowExecutionStatusEnum } from "./maintenancewindowexecutionstatusenum";
/**
 * Success
 */
export declare class GetMaintenanceWindowExecutionResult extends SpeakeasyBase {
    endTime?: Date;
    startTime?: Date;
    status?: MaintenanceWindowExecutionStatusEnum;
    statusDetails?: string;
    taskIds?: string[];
    windowExecutionId?: string;
}
