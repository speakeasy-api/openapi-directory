import { SpeakeasyBase } from "../../../internal/utils";
import { SignalTypeEnum } from "./signaltypeenum";
export declare class SendAutomationSignalRequest extends SpeakeasyBase {
    automationExecutionId: string;
    payload?: Record<string, string[]>;
    signalType: SignalTypeEnum;
}
