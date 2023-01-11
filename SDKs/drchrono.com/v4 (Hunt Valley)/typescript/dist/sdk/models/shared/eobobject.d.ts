import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EobObjectPaymentMethodEnum {
    Unknown = "",
    Ach = "ACH",
    Bopccp = "BOPCCP",
    Bopctx = "BOPCTX",
    Chk = "CHK",
    Fwt = "FWT",
    Vpay = "VPAY",
    Non = "NON"
}
export declare class EobObject extends SpeakeasyBase {
    checkDate?: string;
    depositDate?: string;
    doctor: number;
    id?: number;
    insurancePayerId: string;
    insurancePayerName: string;
    insurancePayerTraceNumber: string;
    paymentMethod?: EobObjectPaymentMethodEnum;
    postedDate?: string;
    scannedEob?: string;
    totalPaid?: number;
    updatedAt?: string;
}
