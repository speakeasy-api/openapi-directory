import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A type that defines the ad rate details for a Promoted Listings Standard (PLS) ad campaign.
 */
export declare class DynamicAdRatePreference extends SpeakeasyBase {
    /**
     * The percentage above or below (-) the eBay suggested ad rate that a seller is willing to pay.<br /><br />This specifies the maximum and minimum values to which an ad rate can be dynamically adjusted.
     */
    adRateAdjustmentPercent?: string;
    /**
     * The maximum value (specified as a percentage) to which the eBay suggested ad rate can be adjusted. The adjusted ad rate will never exceed this percentage.
     */
    adRateCapPercent?: string;
}
