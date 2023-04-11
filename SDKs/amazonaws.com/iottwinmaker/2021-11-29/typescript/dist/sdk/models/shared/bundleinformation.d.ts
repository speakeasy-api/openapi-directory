import { SpeakeasyBase } from "../../../internal/utils";
import { PricingTierEnum } from "./pricingtierenum";
/**
 * Information about the pricing bundle.
 */
export declare class BundleInformation extends SpeakeasyBase {
    bundleNames: string[];
    pricingTier?: PricingTierEnum;
}
