import { SpeakeasyBase } from "../../../internal/utils";
import { MarketplaceListingPlan } from "./marketplacelistingplan";
export declare class MarketplacePurchaseMarketplacePendingChange extends SpeakeasyBase {
    effectiveDate?: string;
    id?: number;
    isInstalled?: boolean;
    /**
     * Marketplace Listing Plan
     */
    plan?: MarketplaceListingPlan;
    unitCount?: number;
}
export declare class MarketplacePurchaseMarketplacePurchase extends SpeakeasyBase {
    billingCycle?: string;
    freeTrialEndsOn?: string;
    isInstalled?: boolean;
    nextBillingDate?: string;
    onFreeTrial?: boolean;
    /**
     * Marketplace Listing Plan
     */
    plan?: MarketplaceListingPlan;
    unitCount?: number;
    updatedAt?: string;
}
/**
 * Marketplace Purchase
 */
export declare class MarketplacePurchase extends SpeakeasyBase {
    email?: string;
    id: number;
    login: string;
    marketplacePendingChange?: MarketplacePurchaseMarketplacePendingChange;
    marketplacePurchase: MarketplacePurchaseMarketplacePurchase;
    organizationBillingEmail?: string;
    type: string;
    url: string;
}
