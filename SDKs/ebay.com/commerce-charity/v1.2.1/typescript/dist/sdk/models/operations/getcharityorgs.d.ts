import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCharityOrgsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetCharityOrgsRequest extends SpeakeasyBase {
    /**
     * A header used to specify the eBay marketplace ID.<br /><br /><b>Valid Values:</b> <code>EBAY_GB</code> and <code>EBAY_US</code>
     */
    xEbayCMarketplaceId: string;
    /**
     * The number of items, from the result set, returned in a single page.<br /><br /><b>Valid Values:</b> <code>1-100</code><br /><br /><b>Default:</b> <code>20</code>
     */
    limit?: string;
    /**
     * The number of items that will be skipped in the result set. This is used with the <b>limit</b> field to control the pagination of the output.<br /><br />For example, if the <b>offset</b> is set to <code>0</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 1 through 10 from the list of items returned. If the <b>offset</b> is set to <code>10</code> and the <b>limit</b> is set to <code>10</code>, the method will retrieve items 11 through 20 from the list of items returned.<br /><br /><b>Valid Values:</b> <code>0-10,000</code><br /><br /><b>Default:</b> <code>0</code>
     */
    offset?: string;
    /**
     * A query string that matches the keywords in name, mission statement, or description.
     */
    q?: string;
    /**
     * A comma-separated list of charitable organization registration IDs.<br /><br /><span class="tablenote"><b>Note: </b>Do not specify this parameter for query-based searches. Specify either the <b>q</b> or <b>registration_ids</b> parameter, but not both.</span><br /><br /><b>Maximum Limit:</b> <code>20</code>
     */
    registrationIds?: string;
}
export declare class GetCharityOrgsResponse extends SpeakeasyBase {
    /**
     * OK
     */
    charitySearchResponse?: shared.CharitySearchResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
