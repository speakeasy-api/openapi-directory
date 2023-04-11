import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountV3 } from "./bankaccountv3";
import { MerchantData } from "./merchantdata";
export declare class CounterpartyV3 extends SpeakeasyBase {
    /**
     * Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     */
    balanceAccountId?: string;
    bankAccount?: BankAccountV3;
    merchant?: MerchantData;
    /**
     * Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
     */
    transferInstrumentId?: string;
}
