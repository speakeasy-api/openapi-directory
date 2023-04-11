import { SpeakeasyBase } from "../../../internal/utils";
import { OrderSummary } from "./ordersummary";
/**
 * Success
 */
export declare class ListOrdersOutput extends SpeakeasyBase {
    /**
     * The pagination token.
     */
    nextToken?: string;
    orders?: OrderSummary[];
}
