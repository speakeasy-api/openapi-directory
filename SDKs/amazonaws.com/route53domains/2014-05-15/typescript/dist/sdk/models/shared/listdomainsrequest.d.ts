import { SpeakeasyBase } from "../../../internal/utils";
import { FilterCondition } from "./filtercondition";
import { SortCondition } from "./sortcondition";
/**
 * The ListDomains request includes the following elements.
 */
export declare class ListDomainsRequest extends SpeakeasyBase {
    filterConditions?: FilterCondition[];
    marker?: string;
    maxItems?: number;
    sortCondition?: SortCondition;
}
