import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
 */
export declare enum CashPaymentPaymentMethodEnum {
    Cash = "CASH",
    Chck = "CHCK",
    Dbit = "DBIT",
    Crdt = "CRDT",
    Amex = "AMEX",
    Visa = "VISA",
    Mstr = "MSTR",
    Disc = "DISC",
    Sqr1 = "SQR1",
    Sqre = "SQRE",
    Ptpa = "PTPA",
    Onpt = "ONPT",
    Othr = "OTHR"
}
/**
 * `"" for Credit, "REF" for Refund, "COR" for Correction, "COPAY" for Copay, "COINSR" for Coinsurance, "OTHR" for Other`
 */
export declare enum CashPaymentPaymentTransactionTypeEnum {
    Unknown = "",
    Ref = "REF",
    Cor = "COR",
    Copay = "COPAY",
    Coinsr = "COINSR",
    Othr = "OTHR"
}
/**
 * Created
 */
export declare class CashPayment extends SpeakeasyBase {
    /**
     * Amount of cash for this payment, cannot be zero
     */
    amount?: number;
    /**
     * If this is absent, the apponitment will be inferred from line item
     */
    appointment?: number;
    createdAt?: string;
    createdBy?: string;
    doctor?: number;
    id?: number;
    lineItem?: number;
    notes?: string;
    patient: number;
    /**
     * `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
     */
    paymentMethod?: CashPaymentPaymentMethodEnum;
    /**
     * `"" for Credit, "REF" for Refund, "COR" for Correction, "COPAY" for Copay, "COINSR" for Coinsurance, "OTHR" for Other`
     */
    paymentTransactionType?: CashPaymentPaymentTransactionTypeEnum;
    postedDate?: string;
    receivedDate?: string;
    traceNumber?: string;
    updatedAt?: string;
}
