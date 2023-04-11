import { SpeakeasyBase } from "../../../internal/utils";
import { AwsCloudWatchAlarmDimensionsDetails } from "./awscloudwatchalarmdimensionsdetails";
/**
 * Specifies an alarm and associates it with the specified metric or metric math expression.
 */
export declare class AwsCloudWatchAlarmDetails extends SpeakeasyBase {
    actionsEnabled?: boolean;
    alarmActions?: string[];
    alarmArn?: string;
    alarmConfigurationUpdatedTimestamp?: string;
    alarmDescription?: string;
    alarmName?: string;
    comparisonOperator?: string;
    datapointsToAlarm?: number;
    dimensions?: AwsCloudWatchAlarmDimensionsDetails[];
    evaluateLowSampleCountPercentile?: string;
    evaluationPeriods?: number;
    extendedStatistic?: string;
    insufficientDataActions?: string[];
    metricName?: string;
    namespace?: string;
    okActions?: string[];
    period?: number;
    statistic?: string;
    threshold?: number;
    thresholdMetricId?: string;
    treatMissingData?: string;
    unit?: string;
}
