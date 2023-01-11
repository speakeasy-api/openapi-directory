import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum CashPaymentPaymentTransactionTypeEnum {
    Unknown = "",
    Ref = "REF",
    Cor = "COR",
    Copay = "COPAY",
    Coinsr = "COINSR",
    Othr = "OTHR"
}
export declare class CashPayment extends SpeakeasyBase {
    amount?: number;
    appointment?: number;
    createdAt?: string;
    createdBy?: string;
    doctor?: number;
    id?: number;
    lineItem?: number;
    notes?: string;
    patient: number;
    paymentMethod?: CashPaymentPaymentMethodEnum;
    paymentTransactionType?: CashPaymentPaymentTransactionTypeEnum;
    postedDate?: string;
    receivedDate?: string;
    traceNumber?: string;
    updatedAt?: string;
}
