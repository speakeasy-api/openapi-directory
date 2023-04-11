import { SpeakeasyBase } from "../../../internal/utils";
/**
 * `""` - Unknown, `"ACH"` - Automated Clearing House (ACH), `"BOPCCP"` - Cash Concentration/Disbursement plus Addenda (CCD+) (ACH), `"BOPCTX"` - Corporate Trade Exchange (CTX) (ACH), `"CHK"` - Check, `"FWT"` - Federal Reserve Funds/Wire Transfer - Nonrepetitive, `"VPAY"` - vPayment, `"NON"` - Non-Payment Data
 */
export declare enum EOBObjectPaymentMethodEnum {
    Unknown = "",
    Ach = "ACH",
    Bopccp = "BOPCCP",
    Bopctx = "BOPCTX",
    Chk = "CHK",
    Fwt = "FWT",
    Vpay = "VPAY",
    Non = "NON"
}
/**
 * Created
 */
export declare class EOBObject extends SpeakeasyBase {
    /**
     * Date of check. If missing, default to the date when the request is made
     */
    checkDate?: string;
    /**
     * Date when EOB gets deposited.
     */
    depositDate?: string;
    doctor: number;
    id?: number;
    insurancePayerId: string;
    insurancePayerName: string;
    insurancePayerTraceNumber: string;
    /**
     * `""` - Unknown, `"ACH"` - Automated Clearing House (ACH), `"BOPCCP"` - Cash Concentration/Disbursement plus Addenda (CCD+) (ACH), `"BOPCTX"` - Corporate Trade Exchange (CTX) (ACH), `"CHK"` - Check, `"FWT"` - Federal Reserve Funds/Wire Transfer - Nonrepetitive, `"VPAY"` - vPayment, `"NON"` - Non-Payment Data
     */
    paymentMethod?: EOBObjectPaymentMethodEnum;
    postedDate?: string;
    scannedEob?: string;
    /**
     * Total amount paid. If missing, default to 0.00
     */
    totalPaid?: number;
    updatedAt?: string;
}
