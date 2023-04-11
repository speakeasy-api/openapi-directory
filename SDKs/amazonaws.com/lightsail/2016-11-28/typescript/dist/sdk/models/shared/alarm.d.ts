import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmStateEnum } from "./alarmstateenum";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { MetricNameEnum } from "./metricnameenum";
import { MetricStatisticEnum } from "./metricstatisticenum";
import { MetricUnitEnum } from "./metricunitenum";
import { MonitoredResourceInfo } from "./monitoredresourceinfo";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";
/**
 * <p>Describes an alarm.</p> <p>An alarm is a way to monitor your Lightsail resource metrics. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms in Amazon Lightsail</a>.</p>
 */
export declare class Alarm extends SpeakeasyBase {
    arn?: string;
    comparisonOperator?: ComparisonOperatorEnum;
    contactProtocols?: ContactProtocolEnum[];
    createdAt?: Date;
    datapointsToAlarm?: number;
    evaluationPeriods?: number;
    location?: ResourceLocation;
    metricName?: MetricNameEnum;
    monitoredResourceInfo?: MonitoredResourceInfo;
    name?: string;
    notificationEnabled?: boolean;
    notificationTriggers?: AlarmStateEnum[];
    period?: number;
    resourceType?: ResourceTypeEnum;
    state?: AlarmStateEnum;
    statistic?: MetricStatisticEnum;
    supportCode?: string;
    threshold?: number;
    treatMissingData?: TreatMissingDataEnum;
    unit?: MetricUnitEnum;
}
