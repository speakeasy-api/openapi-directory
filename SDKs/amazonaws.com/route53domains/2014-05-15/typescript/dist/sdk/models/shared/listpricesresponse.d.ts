import { SpeakeasyBase } from "../../../internal/utils";
import { DomainPrice } from "./domainprice";
/**
 * Success
 */
export declare class ListPricesResponse extends SpeakeasyBase {
    nextPageMarker?: string;
    prices?: DomainPrice[];
}
