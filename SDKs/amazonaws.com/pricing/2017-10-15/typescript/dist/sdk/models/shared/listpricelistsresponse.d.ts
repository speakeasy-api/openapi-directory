import { SpeakeasyBase } from "../../../internal/utils";
import { PriceList } from "./pricelist";
/**
 * Success
 */
export declare class ListPriceListsResponse extends SpeakeasyBase {
    nextToken?: string;
    priceLists?: PriceList[];
}
