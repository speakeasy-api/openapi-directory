import { SpeakeasyBase } from "../../../internal/utils";
import { MaintenanceSchedule } from "./maintenanceschedule";
/**
 * The scheduled maintenance for a runtime engine.
 */
export declare class PendingMaintenance extends SpeakeasyBase {
    engineVersion?: string;
    schedule?: MaintenanceSchedule;
}
