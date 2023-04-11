import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceWindowIdentity } from "./maintenancewindowidentity";
/**
 * Success
 */
export declare class DescribeMaintenanceWindowsResult extends SpeakeasyBase {
    nextToken?: string;
    windowIdentities?: MaintenanceWindowIdentity[];
}
