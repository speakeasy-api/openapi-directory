import { SpeakeasyBase } from "../../../internal/utils";
import { CharityOrg } from "./charityorg";
/**
 * A single set of search results, with information for accessing other sets.
 */
export declare class CharitySearchResponse extends SpeakeasyBase {
    /**
     * The list of charitable organizations that match the search criteria.
     */
    charityOrgs?: CharityOrg[];
    /**
     * The relative path to the current set of results.
     */
    href?: string;
    /**
     * The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>
     */
    limit?: number;
    /**
     * The relative path to the next set of results.
     */
    next?: string;
    /**
     * The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>
     */
    offset?: number;
    /**
     * The relative path to the previous set of results.
     */
    prev?: string;
    /**
     * The total number of matches for the search criteria.
     */
    total?: number;
}
