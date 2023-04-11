import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringExecutionSummary } from "./monitoringexecutionsummary";
import { MonitoringScheduleConfig } from "./monitoringscheduleconfig";
import { MonitoringTypeEnum } from "./monitoringtypeenum";
import { ScheduleStatusEnum } from "./schedulestatusenum";
import { Tag } from "./tag";
/**
 * A schedule for a model monitoring job. For information about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.
 */
export declare class MonitoringSchedule extends SpeakeasyBase {
    creationTime?: Date;
    endpointName?: string;
    failureReason?: string;
    lastModifiedTime?: Date;
    /**
     * Summary of information about the last monitoring job to run.
     */
    lastMonitoringExecutionSummary?: MonitoringExecutionSummary;
    monitoringScheduleArn?: string;
    /**
     * Configures the monitoring schedule and defines the monitoring job.
     */
    monitoringScheduleConfig?: MonitoringScheduleConfig;
    monitoringScheduleName?: string;
    monitoringScheduleStatus?: ScheduleStatusEnum;
    monitoringType?: MonitoringTypeEnum;
    tags?: Tag[];
}
