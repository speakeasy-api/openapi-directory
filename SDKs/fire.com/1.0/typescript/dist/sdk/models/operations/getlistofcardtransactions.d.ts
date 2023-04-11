import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetListofCardTransactionsRequest extends SpeakeasyBase {
    cardId: number;
    limit?: number;
    offset?: number;
}
/**
 * Details of the batch run if this transaction was part of a batch.
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionBatchItemDetails extends SpeakeasyBase {
    /**
     * The UUID for this item in the batch.
     */
    batchItemPublicUuid?: string;
    /**
     * The optional name given to the batch at creation time.
     */
    batchName?: string;
    /**
     * The UUID for this batch.
     */
    batchPublicUuid?: string;
    /**
     * The optional job number given to the batch to link it to your own system.
     */
    jobNumber?: string;
}
/**
 * Details of the card used (if applicable)
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedCard extends SpeakeasyBase {
    alias?: string;
    cardId?: number;
    embossBusinessName?: string;
    embossCardName?: string;
    expiryDate?: Date;
    maskedPan?: string;
    provider?: string;
}
/**
 * The three letter code for the currency - either `EUR` or `GBP`.
 */
export declare enum GetListofCardTransactionsCardTransactionsv1TransactionCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
/**
 * The currency.
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionCurrency extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    code?: GetListofCardTransactionsCardTransactionsv1TransactionCurrencyCodeEnum;
    /**
     * The name of the currency
     */
    description?: string;
}
/**
 * Details of the direct debit (if applicable)
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionDirectDebitDetails extends SpeakeasyBase {
    /**
     * The direct debit reference.
     */
    directDebitReference?: string;
    /**
     * The UUID for the direct debit payment
     */
    directDebitUuid?: string;
    /**
     * the reference of the mandate
     */
    mandateReference?: string;
    /**
     * The UUID for the mandate
     */
    mandateUUid?: string;
    /**
     * The UUID for the mandate
     */
    mandateUuid1?: string;
    /**
     * The Alias of the party who sets up the direct debit.
     */
    originatorAlias?: string;
    /**
     * URL pointing to a large version of the Originator Logo (if available)
     */
    originatorLogoUrlLarge?: string;
    /**
     * URL pointing to a small version of the Originator Logo (if available)
     */
    originatorLogoUrlSmall?: string;
    /**
     * The creator of the party who sets up the direct debit.
     */
    originatorName?: string;
    /**
     * Set by party who sets up the direct debit.
     */
    originatorReference?: string;
}
/**
 * Details of the FX trade (if applicable)
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionFxTrade extends SpeakeasyBase {
    /**
     * amount of buyCurrency being bought
     */
    buyAmount?: number;
    /**
     * currency which is being bought
     */
    buyCurrency?: string;
    /**
     * type of trade - BUY or SELL
     */
    fixedSide?: string;
    /**
     * The FX provider used to make the trade.
     */
    provider?: string;
    /**
     * exchange rate
     */
    rate4d?: number;
    /**
     * amount of sellCurrency being sold
     */
    sellAmount?: number;
    /**
     * currency which is being sold
     */
    sellCurrency?: string;
}
export declare class GetListofCardTransactionsCardTransactionsv1TransactionProprietarySchemeDetails extends SpeakeasyBase {
    /**
     * the scheme proprietary data - key pairs separated by | and key/values separated by ^
     */
    data?: string;
    /**
     * the type of proprietary scheme - SCT for SEPA, FPS for Faster Payments etc.
     */
    type?: string;
}
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyCardPaymentCardMerchant extends SpeakeasyBase {
    acquirerIdDe32?: string;
    additionalAmtDe54?: string;
    additionalDataDe124?: string;
    additionalDataDe48?: string;
    authCodeDe38?: string;
    authorisedByGps?: string;
    avsResult?: string;
    billAmt?: number;
    billCcy?: string;
    expiryDate?: string;
    mccCode?: string;
    merchIdDe42?: string;
    merchNameDe43?: string;
    mtId?: string;
    posDataDe22?: string;
    posDataDe61?: string;
    posTermnlDe41?: string;
    procCode?: string;
    recordDataDe120?: string;
    respCodeDe39?: string;
    retRefNoDe37?: string;
    statusCode?: string;
    token?: string;
    txnAmt4d?: number;
    txnCcy?: string;
    txnCtry?: string;
    txnDesc?: string;
    txnStatCode?: string;
    txnType?: string;
}
export declare enum GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyCardPaymentTypeEnum {
    CardMerchant = "CARD_MERCHANT",
    CardAtm = "CARD_ATM"
}
/**
 * Details of the related third party involved in the transaction.
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyCardPayment extends SpeakeasyBase {
    cardMerchant?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyCardPaymentCardMerchant;
    type?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyCardPaymentTypeEnum;
}
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeAccount extends SpeakeasyBase {
    /**
     * The account number of the Withdrawl account in reference
     */
    accountNumber?: string;
    /**
     * The Alias name of the Withdrawl account in reference
     */
    alias?: string;
    /**
     * The BIC of the Withdrawl account in reference
     */
    bic?: string;
    /**
     * The BIC of the Withdrawl account in reference
     */
    iban?: string;
    /**
     * The ID number of the Withdrawl account in reference
     */
    id?: number;
    /**
     * (Conditional) Provide this field if using Mode 2 and the payee account is in GBP.
     */
    nsc?: string;
}
export declare enum GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeTypeEnum {
    WithdrawalAccount = "WITHDRAWAL_ACCOUNT"
}
/**
 * Details of the related third party involved in the transaction.
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyPayee extends SpeakeasyBase {
    account?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeAccount;
    type?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyPayeeTypeEnum;
}
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyExternalAccountAccount extends SpeakeasyBase {
    /**
     * the Account Number of the account.
     */
    accountNumber?: string;
    /**
     * the name the user gives to the account to help them identify it.
     */
    alias?: string;
    /**
     * the BIC of the account (provided if currency is EUR).
     */
    bic?: string;
    /**
     * the IBAN of the account (provided if currency is EUR).
     */
    iban?: string;
    id?: number;
    /**
     * the Sort Code of the account.
     */
    nsc?: string;
}
export declare enum GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyExternalAccountTypeEnum {
    ExternalAccount = "EXTERNAL_ACCOUNT"
}
/**
 * Details of the related third party involved in the transaction.
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyExternalAccount extends SpeakeasyBase {
    account?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyExternalAccountAccount;
    type?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyExternalAccountTypeEnum;
}
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount extends SpeakeasyBase {
    /**
     * the Account Number of the account.
     */
    accountNumber?: string;
    /**
     * the name the user gives to the account to help them identify it.
     */
    alias?: string;
    /**
     * the BIC of the account (provided if currency is EUR).
     */
    bic?: string;
    /**
     * the IBAN of the account (provided if currency is EUR).
     */
    iban?: string;
    /**
     * identifier for the fire.com account (assigned by fire.com)
     */
    id?: number;
    /**
     * the Sort Code of the account.
     */
    nsc?: string;
}
export declare enum GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountTypeEnum {
    FireAccount = "FIRE_ACCOUNT"
}
/**
 * Details of the related third party involved in the transaction.
 */
export declare class GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccount extends SpeakeasyBase {
    account?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountAccount;
    type?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedPartyRelatedPartyFireAccountTypeEnum;
}
export declare class GetListofCardTransactionsCardTransactionsv1Transaction extends SpeakeasyBase {
    /**
     * Net amount lodged or taken from the account after fees and charges were applied.
     */
    amountAfterCharges?: number;
    /**
     * Amount of the transaction before the fees and taxes were applied.
     */
    amountBeforeCharges?: number;
    /**
     * the balance of the account (in minor currency units - pence, cent etc. 434050 == 4,340.50 GBP for a GBP account).
     */
    balance?: number;
    /**
     * Details of the batch run if this transaction was part of a batch.
     */
    batchItemDetails?: GetListofCardTransactionsCardTransactionsv1TransactionBatchItemDetails;
    /**
     * Details of the card used (if applicable)
     */
    card?: GetListofCardTransactionsCardTransactionsv1TransactionRelatedCard;
    /**
     * The currency.
     */
    currency?: GetListofCardTransactionsCardTransactionsv1TransactionCurrency;
    /**
     * Date of the transaction
     */
    date?: Date;
    dateAcknowledged?: Date;
    /**
     * Details of the direct debit (if applicable)
     */
    directDebitDetails?: GetListofCardTransactionsCardTransactionsv1TransactionDirectDebitDetails;
    /**
     * An internal Fire reference for the transaction (UUID)
     */
    eventUuid?: string;
    /**
     * The amount of the fee, if any.
     */
    feeAmount?: number;
    /**
     * Details of the FX trade (if applicable)
     */
    fxTradeDetails?: GetListofCardTransactionsCardTransactionsv1TransactionFxTrade;
    /**
     * identifier for the fire.com account (assigned by fire.com) This field is only used in the condensed version.
     */
    ican?: number;
    /**
     * The comment/reference on the transaction
     */
    myRef?: string;
    /**
     * (FOP payments only) The FOP Payment Code that was used to make this payment.
     */
    paymentRequestPublicCode?: string;
    /**
     * Extra details about the transaction based on the scheme used to make the payment.
     */
    proprietarySchemeDetails?: GetListofCardTransactionsCardTransactionsv1TransactionProprietarySchemeDetails[];
    /**
     * The id of the transaction.
     */
    refId?: number;
    /**
     * Details of the related third party involved in the transaction.
     */
    relatedParty?: any;
    /**
     * The amount of the tax, if any (e.g. Stamp duty for ATM transactions)
     */
    taxAmount?: number;
    /**
     * The id of this side of the transaction (each transaction has two sides - a to and a from). This is used to get the details of the transaction.
     */
    txnId?: number;
    /**
     * The type of the transaction:
     *
     * @remarks
     * * `LODGEMENT` - Bank Transfer received
     * * `PIS_LODGEMENT` - Fire Open Payments Lodgement received
     * * `MANUAL_TRANSFER` - Manual Transfer to
     * * `WITHDRAWAL` - Bank Transfer sent
     * * `REVERSAL` - Credit Reversal
     * * `DIRECT_DEBIT` - A direct debit.
     * * `DIRECT_DEBIT_REPRESENTED` - A Direct Debit that was requested again after initially failing.
     * * `DIRECT_DEBIT_REFUND` - A refund of a Direct debit.
     * * `INTERNAL_TRANSFER_TO` - Internal Transfer sent (between two of my accounts of the same currency)
     * * `INTERNAL_TRANSFER_FROM` - Internal Transfer received (between two of my accounts of the same currency)
     * * `WITHDRAWAL_RETURNED` - Bank Transfer sent returned
     * * `LODGEMENT_REVERSED` - Bank Transfer received returned
     * * `FX_INTERNAL_TRANSFER_FROM` - FX Internal Transfer received (between two of my accounts of different currency)
     * * `FX_INTERNAL_TRANSFER_TO` - FX Internal Transfer sent (between two of my accounts of different currency)
     * * `CREATE_CARD` - The fee taken when a debit card is issued.
     * * `ADD_ACCOUNT` - The fee taken when an account is created.
     * * `CREATE_ADDITIONAL_USER` - The fee taken when an additional user is created.
     * * `CARD_POS_CONTACT_DEBIT` - Card used in store; read by magnetic stripe or pin
     * * `CARD_POS_CONTACT_CREDIT` - Card used in store; read by magnetic stripe or pin
     * * `CARD_POS_CONTACTLESS_DEBIT` - Card used in store; read by NFC
     * * `CARD_POS_CONTACTLESS_CREDIT` - Card used in store; read by NFC
     * * `CARD_ECOMMERCE_DEBIT` - Card used on the internet
     * * `CARD_ECOMMERCE_CREDIT` - Card used on the internet
     * * `CARD_ATM_DEBIT` - Card used in an ATM
     * * `CARD_ATM_CREDIT` - Card used in an ATM
     * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
     * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT` - Card used in store in non-processing currency; read by magnetic stripe or pin
     * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT` - Card used in store in non-processing currency; read by NFC
     * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT` - Card used in store in non-processing currency; read by NFC
     * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT	` - Card used on the internet in non-processing currency
     * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT` - Card used on the internet in non-processing currency
     * * `CARD_INTERNATIONAL_ATM_DEBIT` - Card used in an ATM in non-processing currency
     * * `CARD_INTERNATIONAL_ATM_CREDIT` - Card used in an ATM in non-processing currency
     * * `CARD_POS_CONTACT_DEBIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
     * * `CARD_POS_CONTACT_CREDIT_REVERSAL` - Card used in store; read by magnetic stripe or pin - reversed
     * * `CARD_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store; read by NFC - reversed
     * * `CARD_POS_CONTACTLESS_CREDIT_REVERSAL` - Card used in store; read by NFC - reversed
     * * `CARD_ECOMMERCE_DEBIT_REVERSAL	` - Card used on the internet - reversed
     * * `CARD_ECOMMERCE_CREDIT_REVERSAL` - Card used on the internet - reversed
     * * `CARD_ATM_DEBIT_REVERSAL` - Card used in an ATM - reversed
     * * `CARD_ATM_CREDIT_REVERSAL` - Card used in an ATM - reversed
     * * `CARD_INTERNATIONAL_POS_CONTACT_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
     * * `CARD_INTERNATIONAL_POS_CONTACT_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by magnetic stripe or pin - reversed
     * * `CARD_INTERNATIONAL_POS_CONTACTLESS_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
     * * `CARD_INTERNATIONAL_POS_CONTACTLESS_CREDIT_REVERSAL` - One or more of the transaction types above. This field can be repeated multiple times to allow for multiple transaction types.
     * * `CARD_INTERNATIONAL_ECOMMERCE_DEBIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
     * * `CARD_INTERNATIONAL_ECOMMERCE_CREDIT_REVERSAL` - Card used in store in non-processing currency; read by NFC - reversed
     * * `CARD_INTERNATIONAL_ATM_DEBIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
     * * `CARD_INTERNATIONAL_ATM_CREDIT_REVERSAL` - Card used on the internet in non-processing currency - reversed
     *
     */
    type?: string;
    /**
     * The comment/reference on the transaction that appears on the recipients statement. Only for withdrawals
     */
    yourRef?: string;
}
export declare class GetListofCardTransactionsCardTransactionsv1 extends SpeakeasyBase {
    /**
     * milisecond timestamp of date range to value.
     */
    dateRangeTo?: number;
    /**
     * The total number of card transactions in the list.
     */
    total?: number;
    transactions?: GetListofCardTransactionsCardTransactionsv1Transaction[];
}
export declare class GetListofCardTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    cardTransactionsv1s?: GetListofCardTransactionsCardTransactionsv1[];
}
