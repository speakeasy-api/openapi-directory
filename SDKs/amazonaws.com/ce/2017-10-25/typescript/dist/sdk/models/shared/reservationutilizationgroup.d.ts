import { SpeakeasyBase } from "../../../internal/utils";
import { ReservationAggregates } from "./reservationaggregates";
/**
 * A group of reservations that share a set of attributes.
 */
export declare class ReservationUtilizationGroup extends SpeakeasyBase {
    attributes?: Record<string, string>;
    key?: string;
    utilization?: ReservationAggregates;
    value?: string;
}
