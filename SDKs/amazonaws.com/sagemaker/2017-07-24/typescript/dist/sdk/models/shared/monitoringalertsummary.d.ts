import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringAlertActions } from "./monitoringalertactions";
import { MonitoringAlertStatusEnum } from "./monitoringalertstatusenum";
/**
 * Provides summary information about a monitor alert.
 */
export declare class MonitoringAlertSummary extends SpeakeasyBase {
    actions: MonitoringAlertActions;
    alertStatus: MonitoringAlertStatusEnum;
    creationTime: Date;
    datapointsToAlert: number;
    evaluationPeriod: number;
    lastModifiedTime: Date;
    monitoringAlertName: string;
}
