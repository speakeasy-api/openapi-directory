import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringAlertStatusEnum } from "./monitoringalertstatusenum";
/**
 * Provides summary information of an alert's history.
 */
export declare class MonitoringAlertHistorySummary extends SpeakeasyBase {
    alertStatus: MonitoringAlertStatusEnum;
    creationTime: Date;
    monitoringAlertName: string;
    monitoringScheduleName: string;
}
