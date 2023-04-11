import { SpeakeasyBase } from "../../../internal/utils";
export declare class InternalPartyIdentification extends SpeakeasyBase {
    /**
     * Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     */
    balanceAccountId?: string;
    /**
     * Unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).
     */
    paymentInstrumentId?: string;
}
