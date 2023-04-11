import { SpeakeasyBase } from "../../../internal/utils";
import { PriceWithCurrency } from "./pricewithcurrency";
/**
 * Information about the domain price associated with a TLD.
 */
export declare class DomainPrice extends SpeakeasyBase {
    changeOwnershipPrice?: PriceWithCurrency;
    name?: string;
    registrationPrice?: PriceWithCurrency;
    renewalPrice?: PriceWithCurrency;
    restorationPrice?: PriceWithCurrency;
    transferPrice?: PriceWithCurrency;
}
