import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BillingLineItemBillingStatusEnum {
    Unknown = "",
    IncompleteInformation = "Incomplete Information",
    InProcessEmdeon = "In Process Emdeon",
    InProcessIHcfa = "In Process iHCFA",
    InProcessGateway = "In Process Gateway",
    InProcessJopari = "In Process Jopari",
    InProcessWaystar = "In Process Waystar",
    RejectedEmdeon = "Rejected Emdeon",
    RejectedIHcfa = "Rejected iHCFA",
    RejectedGateway = "Rejected Gateway",
    RejectedJopari = "Rejected Jopari",
    RejectedWaystar = "Rejected Waystar",
    InProcessPayer = "In Process Payer",
    PayerAcknowledged = "Payer Acknowledged",
    RejectedPayer = "Rejected Payer",
    PaidInFull = "Paid in Full",
    PartiallyPaid = "Partially Paid",
    CoordinationOfBenefits = "Coordination of Benefits",
    EraReceived = "ERA Received",
    EraDenied = "ERA Denied"
}
export declare enum BillingLineItemProcedureTypeEnum {
    C = "C",
    H = "H",
    U = "U",
    S = "S"
}
export declare class BillingLineItem extends SpeakeasyBase {
    adjustment?: number;
    allowed?: number;
    appointment: number;
    balanceIns?: number;
    balancePt?: number;
    balanceTotal?: string;
    billed?: number;
    billingStatus?: BillingLineItemBillingStatusEnum;
    code: string;
    deniedFlag?: boolean;
    description?: string;
    diagnosisPointers: string[];
    doctor?: string;
    expectedReimbursement?: number;
    id?: number;
    ins1Paid?: number;
    ins2Paid?: number;
    ins3Paid?: number;
    insTotal?: string;
    insuranceStatus?: string;
    modifiers?: string[];
    paidTotal?: string;
    patient?: string;
    postedDate?: string;
    price?: number;
    procedureType: BillingLineItemProcedureTypeEnum;
    ptPaid?: number;
    quantity?: number;
    serviceDate?: string;
    units?: string;
    updatedAt?: string;
}
