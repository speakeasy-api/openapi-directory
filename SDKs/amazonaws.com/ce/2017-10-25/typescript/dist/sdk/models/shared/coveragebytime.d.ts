import { SpeakeasyBase } from "../../../internal/utils";
import { Coverage } from "./coverage";
import { DateInterval } from "./dateinterval";
import { ReservationCoverageGroup } from "./reservationcoveragegroup";
/**
 * Reservation coverage for a specified period, in hours.
 */
export declare class CoverageByTime extends SpeakeasyBase {
    groups?: ReservationCoverageGroup[];
    timePeriod?: DateInterval;
    total?: Coverage;
}
