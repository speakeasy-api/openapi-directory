import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BillingLineItemBillingStatusEnum {
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

export enum BillingLineItemProcedureTypeEnum {
    C = "C",
    H = "H",
    U = "U",
    S = "S"
}


export class BillingLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustment" })
  adjustment?: number;

  @SpeakeasyMetadata({ data: "json, name=allowed" })
  allowed?: number;

  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment: number;

  @SpeakeasyMetadata({ data: "json, name=balance_ins" })
  balanceIns?: number;

  @SpeakeasyMetadata({ data: "json, name=balance_pt" })
  balancePt?: number;

  @SpeakeasyMetadata({ data: "json, name=balance_total" })
  balanceTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=billed" })
  billed?: number;

  @SpeakeasyMetadata({ data: "json, name=billing_status" })
  billingStatus?: BillingLineItemBillingStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code: string;

  @SpeakeasyMetadata({ data: "json, name=denied_flag" })
  deniedFlag?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=diagnosis_pointers" })
  diagnosisPointers: string[];

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: string;

  @SpeakeasyMetadata({ data: "json, name=expected_reimbursement" })
  expectedReimbursement?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=ins1_paid" })
  ins1Paid?: number;

  @SpeakeasyMetadata({ data: "json, name=ins2_paid" })
  ins2Paid?: number;

  @SpeakeasyMetadata({ data: "json, name=ins3_paid" })
  ins3Paid?: number;

  @SpeakeasyMetadata({ data: "json, name=ins_total" })
  insTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=insurance_status" })
  insuranceStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiers" })
  modifiers?: string[];

  @SpeakeasyMetadata({ data: "json, name=paid_total" })
  paidTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: string;

  @SpeakeasyMetadata({ data: "json, name=posted_date" })
  postedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: number;

  @SpeakeasyMetadata({ data: "json, name=procedure_type" })
  procedureType: BillingLineItemProcedureTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pt_paid" })
  ptPaid?: number;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=service_date" })
  serviceDate?: string;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
