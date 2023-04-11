import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountV3 } from "./bankaccountv3";
export declare class CounterpartyInfoV3 extends SpeakeasyBase {
    /**
     * Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     */
    balanceAccountId?: string;
    bankAccount?: BankAccountV3;
    /**
     * Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
     */
    transferInstrumentId?: string;
}
