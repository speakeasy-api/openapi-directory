import { SpeakeasyBase } from "../../../internal/utils";
import { Behavior } from "./behavior";
import { MetricValue } from "./metricvalue";
import { VerificationStateEnum } from "./verificationstateenum";
import { ViolationEventAdditionalInfo } from "./violationeventadditionalinfo";
import { ViolationEventTypeEnum } from "./violationeventtypeenum";
/**
 * Information about a Device Defender security profile behavior violation.
 */
export declare class ViolationEvent extends SpeakeasyBase {
    behavior?: Behavior;
    metricValue?: MetricValue;
    securityProfileName?: string;
    thingName?: string;
    verificationState?: VerificationStateEnum;
    verificationStateDescription?: string;
    violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
    violationEventTime?: Date;
    violationEventType?: ViolationEventTypeEnum;
    violationId?: string;
}
