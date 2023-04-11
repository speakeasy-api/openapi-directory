import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyClusterSnapshotScheduleMessage extends SpeakeasyBase {
    clusterIdentifier: string;
    disassociateSchedule?: boolean;
    scheduleIdentifier?: string;
}
