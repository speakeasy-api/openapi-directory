import { SpeakeasyBase } from "../../../internal/utils";
import { SortDirectionEnum } from "./sortdirectionenum";
/**
 * The field on which to sort the Companies
 */
export declare enum CompaniesSortByEnum {
    CreatedAt = "created_at",
    UpdatedAt = "updated_at",
    Name = "name"
}
/**
 * Apply sorting
 */
export declare class CompaniesSort extends SpeakeasyBase {
    /**
     * The field on which to sort the Companies
     */
    by?: CompaniesSortByEnum;
    /**
     * The direction in which to sort the results
     */
    direction?: SortDirectionEnum;
}
