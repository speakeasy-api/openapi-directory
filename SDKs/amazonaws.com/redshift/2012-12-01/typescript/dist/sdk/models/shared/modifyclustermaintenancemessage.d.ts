import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyClusterMaintenanceMessage extends SpeakeasyBase {
    clusterIdentifier: string;
    deferMaintenance?: boolean;
    deferMaintenanceDuration?: number;
    deferMaintenanceEndTime?: Date;
    deferMaintenanceIdentifier?: string;
    deferMaintenanceStartTime?: Date;
}
