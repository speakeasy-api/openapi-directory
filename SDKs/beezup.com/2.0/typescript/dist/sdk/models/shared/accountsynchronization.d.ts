import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountSynchronization extends SpeakeasyBase {
    /**
     * The marketplace account identifier in BeezUP. This account identifier is based on your api settings.
     */
    accountId: number;
    completedHarvestSynchroUtcDate?: Date;
    /**
     * In an marketplace technical code like CDiscount you can have several marketplaces like GO SPORT, etc. We identify them by a business code.
     */
    marketplaceBusinessCode: string;
    /**
     * The technical code of the marketplace.
     */
    marketplaceTechnicalCode: string;
}
