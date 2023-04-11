import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Tickets
 */
export declare enum TicketsSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at"
}
/**
 * Apply sorting
 */
export declare class TicketsSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Tickets
     */
    by?: TicketsSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
