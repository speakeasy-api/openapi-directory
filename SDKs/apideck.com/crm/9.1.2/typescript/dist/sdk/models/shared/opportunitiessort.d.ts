import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Opportunities
 */
export declare enum OpportunitiesSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Title = "title",
    WinProbability = "win_probability",
    MonetaryAmount = "monetary_amount",
    Status = "status"
}
/**
 * Apply sorting
 */
export declare class OpportunitiesSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Opportunities
     */
    by?: OpportunitiesSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
