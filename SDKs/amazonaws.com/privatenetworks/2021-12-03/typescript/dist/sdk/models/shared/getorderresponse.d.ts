import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Success
 */
export declare class GetOrderResponse extends SpeakeasyBase {
    order: Order;
    tags?: Record<string, string>;
}
