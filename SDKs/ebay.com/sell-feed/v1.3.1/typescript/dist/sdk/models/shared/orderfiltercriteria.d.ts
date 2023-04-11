import { SpeakeasyBase } from "../../../internal/utils";
import { DateRange } from "./daterange";
/**
 * The type that defines the fields for the order filters.
 */
export declare class OrderFilterCriteria extends SpeakeasyBase {
    /**
     * The type that defines the fields for a date range.
     */
    creationDateRange?: DateRange;
    /**
     * The type that defines the fields for a date range.
     */
    modifiedDateRange?: DateRange;
    /**
     * The order status of the orders returned. If the filter is omitted from createOrderTask call, orders that are in both <code>ACTIVE </code>and<code> COMPLETED</code> states are returned. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/feed/types/api:OrderStatusEnum'>eBay API documentation</a>
     */
    orderStatus?: string;
}
