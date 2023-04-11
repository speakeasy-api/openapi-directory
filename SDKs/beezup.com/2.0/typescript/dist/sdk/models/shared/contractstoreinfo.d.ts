import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describe the store information related to the offer.
 */
export declare class ContractStoreInfo extends SpeakeasyBase {
    /**
     * The additional store price.
     */
    additionalStorePrice?: number;
    /**
     * The maximum store count related to the offer.
     */
    maxStoreCount?: number;
    /**
     * The minimum store count related to the offer.
     */
    minStoreCount?: number;
    /**
     * The owned store count.
     */
    ownedStoreCount?: number;
    /**
     * The store count you want to have in your contract.
     */
    storeCount?: number;
    /**
     * The store count included in the offer.
     */
    storeIncluded?: number;
}
