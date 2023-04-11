import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityCodeEnum } from "./availabilitycodeenum";
import { UnavailabilityReasonCodeEnum } from "./unavailabilityreasoncodeenum";
/**
 * Success
 */
export declare class GetSensitiveDataOccurrencesAvailabilityResponse extends SpeakeasyBase {
    code?: AvailabilityCodeEnum;
    reasons?: UnavailabilityReasonCodeEnum[];
}
