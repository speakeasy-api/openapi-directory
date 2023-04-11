import { SpeakeasyBase } from "../../../internal/utils";
import { ActionsSuppressedByEnum } from "./actionssuppressedbyenum";
import { StateValueEnum } from "./statevalueenum";
/**
 * The details about a composite alarm.
 */
export declare class CompositeAlarm extends SpeakeasyBase {
    actionsEnabled?: boolean;
    actionsSuppressedBy?: ActionsSuppressedByEnum;
    actionsSuppressedReason?: string;
    actionsSuppressor?: string;
    actionsSuppressorExtensionPeriod?: number;
    actionsSuppressorWaitPeriod?: number;
    alarmActions?: string[];
    alarmArn?: string;
    alarmConfigurationUpdatedTimestamp?: Date;
    alarmDescription?: string;
    alarmName?: string;
    alarmRule?: string;
    insufficientDataActions?: string[];
    okActions?: string[];
    stateReason?: string;
    stateReasonData?: string;
    stateTransitionedTimestamp?: Date;
    stateUpdatedTimestamp?: Date;
    stateValue?: StateValueEnum;
}
