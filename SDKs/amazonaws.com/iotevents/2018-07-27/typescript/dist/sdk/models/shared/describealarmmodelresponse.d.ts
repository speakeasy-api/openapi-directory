import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmCapabilities } from "./alarmcapabilities";
import { AlarmEventActions } from "./alarmeventactions";
import { AlarmModelVersionStatusEnum } from "./alarmmodelversionstatusenum";
import { AlarmNotification } from "./alarmnotification";
import { AlarmRule } from "./alarmrule";
/**
 * Success
 */
export declare class DescribeAlarmModelResponse extends SpeakeasyBase {
    alarmCapabilities?: AlarmCapabilities;
    alarmEventActions?: AlarmEventActions;
    alarmModelArn?: string;
    alarmModelDescription?: string;
    alarmModelName?: string;
    alarmModelVersion?: string;
    alarmNotification?: AlarmNotification;
    alarmRule?: AlarmRule;
    creationTime?: Date;
    key?: string;
    lastUpdateTime?: Date;
    roleArn?: string;
    severity?: number;
    status?: AlarmModelVersionStatusEnum;
    statusMessage?: string;
}
