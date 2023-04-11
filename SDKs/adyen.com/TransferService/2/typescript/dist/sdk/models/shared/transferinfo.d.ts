import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
import { Bank } from "./bank";
import { CounterpartyInfo } from "./counterpartyinfo";
export declare class TransferInfo extends SpeakeasyBase {
    amount: Amount;
    /**
     * The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
     */
    balanceAccountId?: string;
    bank?: Bank;
    counterparty: CounterpartyInfo;
    /**
     * A human-readable description for the transfer. You can use alphanumeric characters and hyphens. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.
     */
    description?: string;
    /**
     * The ID of the resource.
     */
    id?: string;
    /**
     * The unique identifier of the source [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/paymentInstruments__resParam_id).
     */
    paymentInstrumentId?: string;
    /**
     * Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.
     */
    reference?: string;
    /**
     *  A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.
     *
     * @remarks
     *
     *  Supported characters: **a-z**, **A-Z**, **0-9**. Maximum length: 80 characters.
     */
    referenceForBeneficiary?: string;
}
