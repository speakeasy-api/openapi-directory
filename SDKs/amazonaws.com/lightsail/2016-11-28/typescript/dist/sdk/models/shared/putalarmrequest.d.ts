import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmStateEnum } from "./alarmstateenum";
import { ComparisonOperatorEnum } from "./comparisonoperatorenum";
import { ContactProtocolEnum } from "./contactprotocolenum";
import { MetricNameEnum } from "./metricnameenum";
import { TreatMissingDataEnum } from "./treatmissingdataenum";
export declare class PutAlarmRequest extends SpeakeasyBase {
    alarmName: string;
    comparisonOperator: ComparisonOperatorEnum;
    contactProtocols?: ContactProtocolEnum[];
    datapointsToAlarm?: number;
    evaluationPeriods: number;
    metricName: MetricNameEnum;
    monitoredResourceName: string;
    notificationEnabled?: boolean;
    notificationTriggers?: AlarmStateEnum[];
    threshold: number;
    treatMissingData?: TreatMissingDataEnum;
}
