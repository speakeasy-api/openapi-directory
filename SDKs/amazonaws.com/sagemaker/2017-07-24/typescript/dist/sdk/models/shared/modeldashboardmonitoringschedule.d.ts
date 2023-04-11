import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringAlertSummary } from "./monitoringalertsummary";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { ScheduleStatusEnum } from "./schedulestatusenum";
/**
 * A monitoring schedule for a model displayed in the Amazon SageMaker Model Dashboard.
 */
export declare class ModelDashboardMonitoringSchedule extends SpeakeasyBase {
    creationTime?: Date;
    endpointName?: string;
    failureReason?: string;
    lastModifiedTime?: Date;
    /**
     * Summary of information about the last monitoring job to run.
     */
    lastMonitoringExecutionSummary?: MonitoringExecutionSummary;
    monitoringAlertSummaries?: MonitoringAlertSummary[];
    monitoringScheduleArn?: string;
    /**
     * Configures the monitoring schedule and defines the monitoring job.
     */
    monitoringScheduleConfig?: MonitoringScheduleConfig;
    monitoringScheduleName?: string;
    monitoringScheduleStatus?: ScheduleStatusEnum;
    monitoringType?: MonitoringTypeEnum;
}
