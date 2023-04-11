import { SpeakeasyBase } from "../../../internal/utils";
import { StoreSplitConfiguration } from "./storesplitconfiguration";
import { UpdatableAddress } from "./updatableaddress";
/**
 * The status of the store. Possible values are:
 *
 * @remarks
 *
 * - **active**: This value is assigned automatically when a store is created.
 * - **inactive**: The maximum [transaction limits and number of Store-and-Forward transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features) for the store are set to 0. This blocks new transactions, but captures are still possible.
 * - **closed**: The terminals of the store are reassigned to the merchant inventory, so they can't process payments.
 *
 * You can change the status from **active** to **inactive**, and from **inactive** to **active** or **closed**.
 * Once **closed**, a store can't be reopened.
 */
export declare enum UpdateStoreRequestStatusEnum {
    Active = "active",
    Closed = "closed",
    Inactive = "inactive"
}
export declare class UpdateStoreRequest extends SpeakeasyBase {
    address?: UpdatableAddress;
    /**
     * The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.
     */
    businessLineIds?: string[];
    /**
     * The description of the store.
     */
    description?: string;
    /**
     * When using the Zip payment method: The location ID that Zip has assigned to your store.
     */
    externalReferenceId?: string;
    splitConfiguration?: StoreSplitConfiguration;
    /**
     * The status of the store. Possible values are:
     *
     * @remarks
     *
     * - **active**: This value is assigned automatically when a store is created.
     * - **inactive**: The maximum [transaction limits and number of Store-and-Forward transactions](https://docs.adyen.com/point-of-sale/determine-account-structure/configure-features#payment-features) for the store are set to 0. This blocks new transactions, but captures are still possible.
     * - **closed**: The terminals of the store are reassigned to the merchant inventory, so they can't process payments.
     *
     * You can change the status from **active** to **inactive**, and from **inactive** to **active** or **closed**.
     * Once **closed**, a store can't be reopened.
     */
    status?: UpdateStoreRequestStatusEnum;
}
