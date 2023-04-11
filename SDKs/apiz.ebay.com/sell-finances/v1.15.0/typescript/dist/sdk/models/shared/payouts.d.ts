import { SpeakeasyBase } from "../../../internal/utils";
import { Payout } from "./payout";
/**
 * This type is the base response type of the <strong>getPayouts</strong> method, and contains an array of one or more payouts (that match the input criteria), the total count of payouts in the response, and various pagination data for the results set.
 */
export declare class Payouts extends SpeakeasyBase {
    /**
     * The URI of the <b>getPayouts</b> call request that produced the current page of the result set.
     */
    href?: string;
    /**
     * The maximum number of payouts that may be returned per page of the result set. The <strong>limit</strong> value can be passed in as a query parameter, or if omitted, its value defaults to <code>20</code>. <br><br><span class="tablenote"><strong>Note:</strong> If this is the last or only page of the result set, the page may contain fewer payouts than the <strong>limit</strong> value.  To determine the number of pages in a result set, divide the <b>total</b> value (total number of payouts matching input criteria) by this <strong>limit</strong> value, and then round up to the next integer. For example, if the <b>total</b> value was <code>120</code> (120 total payouts) and the <strong>limit</strong> value was <code>50</code> (show 50 payouts per page), the total number of pages in the result set is three, so the seller would have to make three separate <strong>getPayouts</strong> calls to view all payouts matching the input criteria. </span><br><br><b>Maximum:</b> <code>200</code> <br> <b>Default:</b> <code>20</code>
     */
    limit?: number;
    /**
     * The <b>getPayouts</b> call URI to use if you wish to view the next page of the result set. <br><br>This field is only returned if there is a next page of results to view based on the current input criteria.
     */
    next?: string;
    /**
     * This integer value indicates the actual position that the first payout returned on the current page has in the results set. So, if you wanted to view the 11th payout of the result set, you would set the <strong>offset</strong> value in the request to <code>10</code>. <br><br>In the request, you can use the <b>offset</b> parameter in conjunction with the <b>limit</b> parameter to control the pagination of the output. For example, if <b>offset</b> is set to <code>30</code> and <b>limit</b> is set to <code>10</code>, the call retrieves payouts 31 thru 40 from the resulting collection of payouts. <br><br> <span class="tablenote"><strong>Note:</strong> This feature employs a zero-based list, where the first item in the list has an offset of <code>0</code>.</span><br><br><b>Default:</b> <code>0</code> (zero)
     */
    offset?: number;
    /**
     * An array of one or more payouts that match the input criteria. Details for each payout include the unique identifier of the payout, the status of the payout, the amount of the payout, and the number of monetary transactions associated with the payout.
     */
    payouts?: Payout[];
    /**
     * The <b>getPayouts</b> call URI to use if you wish to view the previous page of the result set. <br><br>This field is only returned if there is a previous page of results to view based on the current input criteria.
     */
    prev?: string;
    /**
     * This integer value is the total number of payouts in the results set based on the current input criteria. Based on the total number of payouts that match the criteria, and on the <strong>limit</strong> and <strong>offset</strong> values, there may be additional pages in the results set.
     */
    total?: number;
}
