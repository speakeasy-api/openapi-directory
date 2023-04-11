import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `C`(Create), `U`(Update), `D`(Delete), `F`(Fill), `A`(Autofill)
 */
export declare enum CashPaymentLogActionEnum {
    C = "C",
    U = "U",
    D = "D",
    F = "F",
    A = "A"
}
/**
 * `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
 */
export declare enum CashPaymentLogPaymentMethodEnum {
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
 * OK
 */
export declare class CashPaymentLog extends SpeakeasyBase {
    /**
     * `C`(Create), `U`(Update), `D`(Delete), `F`(Fill), `A`(Autofill)
     */
    action?: CashPaymentLogActionEnum;
    amount?: number;
    /**
     * ID of appointment associated with the payment
     */
    appointment?: string;
    /**
     * ID of user who created the payment
     */
    createdBy?: string;
    doctor?: string;
    id?: number;
    patient?: string;
    /**
     * `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
     */
    paymentMethod?: CashPaymentLogPaymentMethodEnum;
    source?: string;
    updatedAt?: string;
}
