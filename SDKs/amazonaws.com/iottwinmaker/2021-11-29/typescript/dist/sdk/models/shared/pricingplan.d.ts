import { SpeakeasyBase } from "../../../internal/utils";
import { BundleInformation } from "./bundleinformation";
import { PricingModeEnum } from "./pricingmodeenum";
import { UpdateReasonEnum } from "./updatereasonenum";
/**
 * The pricing plan.
 */
export declare class PricingPlan extends SpeakeasyBase {
    billableEntityCount?: number;
    bundleInformation?: BundleInformation;
    effectiveDateTime: Date;
    pricingMode: PricingModeEnum;
    updateDateTime: Date;
    updateReason: UpdateReasonEnum;
}
