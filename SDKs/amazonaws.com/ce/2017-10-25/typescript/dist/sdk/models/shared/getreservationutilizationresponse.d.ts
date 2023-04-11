import { SpeakeasyBase } from "../../../internal/utils";
import { ReservationAggregates } from "./reservationaggregates";
import { UtilizationByTime } from "./utilizationbytime";
/**
 * Success
 */
export declare class GetReservationUtilizationResponse extends SpeakeasyBase {
    nextPageToken?: string;
    total?: ReservationAggregates;
    utilizationsByTime: UtilizationByTime[];
}
