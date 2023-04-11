import { SpeakeasyBase } from "../../../internal/utils";
export declare class StoreSplitConfiguration extends SpeakeasyBase {
    /**
     * The [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__queryParam_id) linked to the account holder.
     */
    balanceAccountId?: string;
    /**
     * The UUID of the [split configuration](https://docs.adyen.com/marketplaces-and-platforms/classic/split-configuration-for-stores) from the Customer Area.
     */
    splitConfigurationId?: string;
}
