import { SpeakeasyBase } from "../../../internal/utils";
import { BankAccountInfo } from "./bankaccountinfo";
import { MerchantData } from "./merchantdata";
export declare class Counterparty extends SpeakeasyBase {
    /**
     * Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     */
    balanceAccountId?: string;
    bankAccount?: BankAccountInfo;
    merchant?: MerchantData;
    /**
     * Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).
     */
    transferInstrumentId?: string;
}
