import { SpeakeasyBase } from "../../../internal/utils";
import { ZonalShiftSummary } from "./zonalshiftsummary";
/**
 * Success
 */
export declare class ListZonalShiftsResponse extends SpeakeasyBase {
    items?: ZonalShiftSummary[];
    nextToken?: string;
}
