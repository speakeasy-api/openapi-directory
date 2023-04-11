import { SpeakeasyBase } from "../../../internal/utils";
import { StateValueEnum } from "./statevalueenum";
export declare class SetAlarmStateInput extends SpeakeasyBase {
    alarmName: string;
    stateReason: string;
    stateReasonData?: string;
    stateValue: StateValueEnum;
}
