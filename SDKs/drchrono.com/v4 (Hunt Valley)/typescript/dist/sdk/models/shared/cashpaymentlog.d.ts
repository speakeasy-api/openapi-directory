import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CashPaymentLogActionEnum {
    C = "C",
    U = "U",
    D = "D",
    F = "F",
    A = "A"
}
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
export declare class CashPaymentLog extends SpeakeasyBase {
    action?: CashPaymentLogActionEnum;
    amount?: number;
    appointment?: string;
    createdBy?: string;
    doctor?: string;
    id?: number;
    patient?: string;
    paymentMethod?: CashPaymentLogPaymentMethodEnum;
    source?: string;
    updatedAt?: string;
}
