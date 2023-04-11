import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
export declare enum CapabilitySettingsFundingSourceEnum {
    Credit = "credit",
    Debit = "debit",
    Prepaid = "prepaid"
}
/**
 * The period when the rule conditions apply.
 */
export declare enum CapabilitySettingsIntervalEnum {
    Daily = "daily",
    Monthly = "monthly",
    Weekly = "weekly"
}
export declare class CapabilitySettings extends SpeakeasyBase {
    /**
     * The maximum amount a card holder can spend per industry.
     */
    amountPerIndustry?: Record<string, Amount>;
    /**
     * The number of card holders who can use the card.
     */
    authorizedCardUsers?: boolean;
    /**
     * The funding source of the card, for example **debit**.
     */
    fundingSource?: CapabilitySettingsFundingSourceEnum[];
    /**
     * The period when the rule conditions apply.
     */
    interval?: CapabilitySettingsIntervalEnum;
    maxAmount?: Amount;
}
