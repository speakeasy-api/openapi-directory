import { SpeakeasyBase } from "../../../internal/utils";
import { FilterSummary } from "./filtersummary";
/**
 * Success
 */
export declare class ListFiltersResponse extends SpeakeasyBase {
    filters?: FilterSummary[];
    nextToken?: string;
}
