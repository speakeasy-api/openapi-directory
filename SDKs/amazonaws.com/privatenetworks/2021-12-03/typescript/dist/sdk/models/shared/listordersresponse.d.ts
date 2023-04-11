import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
/**
 * Success
 */
export declare class ListOrdersResponse extends SpeakeasyBase {
    nextToken?: string;
    orders?: Order[];
}
