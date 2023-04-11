import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The creation source of the payee.
 */
export declare enum GetPayeesPayeeBankAccountsPayeeCreatedByEnum {
    Customer = "CUSTOMER",
    Lodgement = "LODGEMENT",
    DirectDebit = "DIRECT DEBIT",
    OpenBanking = "OPEN BANKING",
    FireOpenPayment = "FIRE OPEN PAYMENT",
    FireDirect = "FIRE DIRECT"
}
/**
 * The three letter code for the currency - either `EUR` or `GBP`.
 */
export declare enum GetPayeesPayeeBankAccountsPayeeCurrencyCodeEnum {
    Eur = "EUR",
    Gbp = "GBP"
}
/**
 * The currency.
 */
export declare class GetPayeesPayeeBankAccountsPayeeCurrency extends SpeakeasyBase {
    /**
     * The three letter code for the currency - either `EUR` or `GBP`.
     */
    code?: GetPayeesPayeeBankAccountsPayeeCurrencyCodeEnum;
    /**
     * The name of the currency
     */
    description?: string;
}
/**
 * The status of the payee. Only payees in LIVE status can be selected as a destination account for an outgoing payment.
 *
 * @remarks
 *   * 'CREATED' - The payee has been set-up via Bank Transfer Received, Direct Debit, or Open Banking. This payee must be converted to LIVE status to select as a destination account for an outgoing payment.
 *   * 'LIVE' - The payee can be selected as a destination account for an outgoing payment.
 *   * 'CLOSED'
 *   * 'ARCHIVED' - The payee has been deleted and must be added again to be selected as a destination account for an outgoing payment.
 *
 */
export declare enum GetPayeesPayeeBankAccountsPayeeStatusEnum {
    Created = "CREATED",
    Live = "LIVE",
    Closed = "CLOSED",
    Archived = "ARCHIVED"
}
export declare class GetPayeesPayeeBankAccountsPayee extends SpeakeasyBase {
    /**
     * The name on the payee bank account.
     */
    accountHolderName?: string;
    /**
     * The alias attributed to the payee, usually set by the user when creating the payee.
     */
    accountName?: string;
    /**
     * The Account Number of the account if currency is GBP.
     */
    accountNumber?: string;
    /**
     * The BIC of the account if currency is EUR.
     */
    bic?: string;
    /**
     * The creation source of the payee.
     */
    createdBy?: GetPayeesPayeeBankAccountsPayeeCreatedByEnum;
    /**
     * The currency.
     */
    currency?: GetPayeesPayeeBankAccountsPayeeCurrency;
    /**
     * The date the payee was created. ISO Date Time.
     */
    dateCreated?: Date;
    /**
     * The IBAN of the account if currency is EUR.
     */
    iban?: string;
    /**
     * Identifier for the fire.com payee bank account (assigned by fire.com).
     */
    id?: number;
    /**
     * The Sort Code of the account if currency is GBP.
     */
    nsc?: string;
    /**
     * The status of the payee. Only payees in LIVE status can be selected as a destination account for an outgoing payment.
     *
     * @remarks
     *   * 'CREATED' - The payee has been set-up via Bank Transfer Received, Direct Debit, or Open Banking. This payee must be converted to LIVE status to select as a destination account for an outgoing payment.
     *   * 'LIVE' - The payee can be selected as a destination account for an outgoing payment.
     *   * 'CLOSED'
     *   * 'ARCHIVED' - The payee has been deleted and must be added again to be selected as a destination account for an outgoing payment.
     *
     */
    status?: GetPayeesPayeeBankAccountsPayeeStatusEnum;
}
/**
 * An array of Payee Bank Accounts
 */
export declare class GetPayeesPayeeBankAccounts extends SpeakeasyBase {
    fundingSources?: GetPayeesPayeeBankAccountsPayee[];
    /**
     * The total number of payees in the list.
     */
    total?: number;
}
export declare class GetPayeesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of Payee Bank Accounts
     */
    payeeBankAccounts?: GetPayeesPayeeBankAccounts;
}
