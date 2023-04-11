import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MarketplaceListingPlanPriceModelEnum {
    Free = "FREE",
    FlatRate = "FLAT_RATE",
    PerUnit = "PER_UNIT"
}
/**
 * Marketplace Listing Plan
 */
export declare class MarketplaceListingPlan extends SpeakeasyBase {
    accountsUrl: string;
    bullets: string[];
    description: string;
    hasFreeTrial: boolean;
    id: number;
    monthlyPriceInCents: number;
    name: string;
    number: number;
    priceModel: MarketplaceListingPlanPriceModelEnum;
    state: string;
    unitName: string;
    url: string;
    yearlyPriceInCents: number;
}
