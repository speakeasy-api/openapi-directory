import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of `""`, `"Incomplete Information"`, `"In Process Emdeon"`, `"In Process iHCFA"`, `"In Process Gateway"`, `"Rejected Emdeon"`, `"Rejected iHCFA"`, `"Rejected Gateway"`, `"In Process Payer"`, `"Payer Acknowledged"`, `"Rejected Payer"`, `"Paid in Full"`,  `"Partially Paid"`,  `"Coordination of Benefits"`,  `"ERA Received"`,  `"ERA Denied"`
 */
export declare enum BillingLineItemBillingStatusEnum {
    Unknown = "",
    IncompleteInformation = "Incomplete Information",
    InProcessEmdeon = "In Process Emdeon",
    InProcessIHCFA = "In Process iHCFA",
    InProcessGateway = "In Process Gateway",
    InProcessJopari = "In Process Jopari",
    InProcessWaystar = "In Process Waystar",
    RejectedEmdeon = "Rejected Emdeon",
    RejectedIHCFA = "Rejected iHCFA",
    RejectedGateway = "Rejected Gateway",
    RejectedJopari = "Rejected Jopari",
    RejectedWaystar = "Rejected Waystar",
    InProcessPayer = "In Process Payer",
    PayerAcknowledged = "Payer Acknowledged",
    RejectedPayer = "Rejected Payer",
    PaidInFull = "Paid in Full",
    PartiallyPaid = "Partially Paid",
    CoordinationOfBenefits = "Coordination of Benefits",
    ERAReceived = "ERA Received",
    ERADenied = "ERA Denied"
}
/**
 * One of `"CPT(C)"`, `"HCPCS(H)"`, `"Custom(U)"`, use 1 character identifier when using `POST`
 */
export declare enum BillingLineItemProcedureTypeEnum {
    C = "C",
    H = "H",
    U = "U",
    S = "S"
}
/**
 * Created
 */
export declare class BillingLineItem extends SpeakeasyBase {
    /**
     * Adjustment from total billed
     */
    adjustment?: number;
    /**
     * Amount allowed by insurance
     */
    allowed?: number;
    /**
     * Appointment ID
     */
    appointment: number;
    /**
     * Insurance balance
     */
    balanceIns?: number;
    /**
     * Patient balance
     */
    balancePt?: number;
    /**
     * Total balance
     */
    balanceTotal?: string;
    /**
     * Total billed
     */
    billed?: number;
    /**
     * One of `""`, `"Incomplete Information"`, `"In Process Emdeon"`, `"In Process iHCFA"`, `"In Process Gateway"`, `"Rejected Emdeon"`, `"Rejected iHCFA"`, `"Rejected Gateway"`, `"In Process Payer"`, `"Payer Acknowledged"`, `"Rejected Payer"`, `"Paid in Full"`,  `"Partially Paid"`,  `"Coordination of Benefits"`,  `"ERA Received"`,  `"ERA Denied"`
     */
    billingStatus?: BillingLineItemBillingStatusEnum;
    code: string;
    deniedFlag?: boolean;
    description?: string;
    /**
     * List of 4 diagnosis pointers
     */
    diagnosisPointers: string[];
    /**
     * Doctor ID
     */
    doctor?: string;
    expectedReimbursement?: number;
    id?: number;
    /**
     * Amount paid by patient's primary insurer
     */
    ins1Paid?: number;
    /**
     * Amount paid by patient's secondary insurer
     */
    ins2Paid?: number;
    /**
     * Amount paid by patinet's tertiary insurer
     */
    ins3Paid?: number;
    /**
     * Total amount paid by patient's insurers
     */
    insTotal?: string;
    /**
     * This corresponds to the "Status/Adj Type" from billing detail screen
     */
    insuranceStatus?: string;
    /**
     * List of 4 code modifiers
     */
    modifiers?: string[];
    /**
     * Total amount paid
     */
    paidTotal?: string;
    /**
     * Patient ID
     */
    patient?: string;
    postedDate?: string;
    /**
     * Price of procedure
     */
    price?: number;
    /**
     * One of `"CPT(C)"`, `"HCPCS(H)"`, `"Custom(U)"`, use 1 character identifier when using `POST`
     */
    procedureType: BillingLineItemProcedureTypeEnum;
    /**
     * Amount paid by patient
     */
    ptPaid?: number;
    quantity?: number;
    /**
     * Date on which the service was rendered
     */
    serviceDate?: string;
    /**
     * Default to "UN"
     */
    units?: string;
    updatedAt?: string;
}
