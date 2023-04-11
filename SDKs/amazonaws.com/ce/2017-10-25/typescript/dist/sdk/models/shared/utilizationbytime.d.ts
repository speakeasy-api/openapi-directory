import { SpeakeasyBase } from "../../../internal/utils";
import { DateInterval } from "./dateinterval";
import { ReservationAggregates } from "./reservationaggregates";
import { ReservationUtilizationGroup } from "./reservationutilizationgroup";
/**
 * The amount of utilization, in hours.
 */
export declare class UtilizationByTime extends SpeakeasyBase {
    groups?: ReservationUtilizationGroup[];
    timePeriod?: DateInterval;
    total?: ReservationAggregates;
}
