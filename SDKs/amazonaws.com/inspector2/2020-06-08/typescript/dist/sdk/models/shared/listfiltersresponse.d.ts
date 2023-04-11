import { SpeakeasyBase } from "../../../internal/utils";
import { Filter } from "./filter";
/**
 * Success
 */
export declare class ListFiltersResponse extends SpeakeasyBase {
    filters: Filter[];
    nextToken?: string;
}
