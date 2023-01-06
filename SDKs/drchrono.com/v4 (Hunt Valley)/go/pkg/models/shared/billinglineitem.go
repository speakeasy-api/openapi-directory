package shared

type BillingLineItemBillingStatusEnum string

const (
	BillingLineItemBillingStatusEnumUnknown                BillingLineItemBillingStatusEnum = ""
	BillingLineItemBillingStatusEnumIncompleteInformation  BillingLineItemBillingStatusEnum = "Incomplete Information"
	BillingLineItemBillingStatusEnumInProcessEmdeon        BillingLineItemBillingStatusEnum = "In Process Emdeon"
	BillingLineItemBillingStatusEnumInProcessIHcfa         BillingLineItemBillingStatusEnum = "In Process iHCFA"
	BillingLineItemBillingStatusEnumInProcessGateway       BillingLineItemBillingStatusEnum = "In Process Gateway"
	BillingLineItemBillingStatusEnumInProcessJopari        BillingLineItemBillingStatusEnum = "In Process Jopari"
	BillingLineItemBillingStatusEnumInProcessWaystar       BillingLineItemBillingStatusEnum = "In Process Waystar"
	BillingLineItemBillingStatusEnumRejectedEmdeon         BillingLineItemBillingStatusEnum = "Rejected Emdeon"
	BillingLineItemBillingStatusEnumRejectedIHcfa          BillingLineItemBillingStatusEnum = "Rejected iHCFA"
	BillingLineItemBillingStatusEnumRejectedGateway        BillingLineItemBillingStatusEnum = "Rejected Gateway"
	BillingLineItemBillingStatusEnumRejectedJopari         BillingLineItemBillingStatusEnum = "Rejected Jopari"
	BillingLineItemBillingStatusEnumRejectedWaystar        BillingLineItemBillingStatusEnum = "Rejected Waystar"
	BillingLineItemBillingStatusEnumInProcessPayer         BillingLineItemBillingStatusEnum = "In Process Payer"
	BillingLineItemBillingStatusEnumPayerAcknowledged      BillingLineItemBillingStatusEnum = "Payer Acknowledged"
	BillingLineItemBillingStatusEnumRejectedPayer          BillingLineItemBillingStatusEnum = "Rejected Payer"
	BillingLineItemBillingStatusEnumPaidInFull             BillingLineItemBillingStatusEnum = "Paid in Full"
	BillingLineItemBillingStatusEnumPartiallyPaid          BillingLineItemBillingStatusEnum = "Partially Paid"
	BillingLineItemBillingStatusEnumCoordinationOfBenefits BillingLineItemBillingStatusEnum = "Coordination of Benefits"
	BillingLineItemBillingStatusEnumEraReceived            BillingLineItemBillingStatusEnum = "ERA Received"
	BillingLineItemBillingStatusEnumEraDenied              BillingLineItemBillingStatusEnum = "ERA Denied"
)

type BillingLineItemProcedureTypeEnum string

const (
	BillingLineItemProcedureTypeEnumC BillingLineItemProcedureTypeEnum = "C"
	BillingLineItemProcedureTypeEnumH BillingLineItemProcedureTypeEnum = "H"
	BillingLineItemProcedureTypeEnumU BillingLineItemProcedureTypeEnum = "U"
	BillingLineItemProcedureTypeEnumS BillingLineItemProcedureTypeEnum = "S"
)

type BillingLineItem struct {
	Adjustment            *float64                          `json:"adjustment,omitempty"`
	Allowed               *float64                          `json:"allowed,omitempty"`
	Appointment           int64                             `json:"appointment"`
	BalanceIns            *float64                          `json:"balance_ins,omitempty"`
	BalancePt             *float64                          `json:"balance_pt,omitempty"`
	BalanceTotal          *string                           `json:"balance_total,omitempty"`
	Billed                *float64                          `json:"billed,omitempty"`
	BillingStatus         *BillingLineItemBillingStatusEnum `json:"billing_status,omitempty"`
	Code                  string                            `json:"code"`
	DeniedFlag            *bool                             `json:"denied_flag,omitempty"`
	Description           *string                           `json:"description,omitempty"`
	DiagnosisPointers     []string                          `json:"diagnosis_pointers"`
	Doctor                *string                           `json:"doctor,omitempty"`
	ExpectedReimbursement *float64                          `json:"expected_reimbursement,omitempty"`
	ID                    *int64                            `json:"id,omitempty"`
	Ins1Paid              *float64                          `json:"ins1_paid,omitempty"`
	Ins2Paid              *float64                          `json:"ins2_paid,omitempty"`
	Ins3Paid              *float64                          `json:"ins3_paid,omitempty"`
	InsTotal              *string                           `json:"ins_total,omitempty"`
	InsuranceStatus       *string                           `json:"insurance_status,omitempty"`
	Modifiers             []string                          `json:"modifiers,omitempty"`
	PaidTotal             *string                           `json:"paid_total,omitempty"`
	Patient               *string                           `json:"patient,omitempty"`
	PostedDate            *string                           `json:"posted_date,omitempty"`
	Price                 *float64                          `json:"price,omitempty"`
	ProcedureType         BillingLineItemProcedureTypeEnum  `json:"procedure_type"`
	PtPaid                *float64                          `json:"pt_paid,omitempty"`
	Quantity              *float64                          `json:"quantity,omitempty"`
	ServiceDate           *string                           `json:"service_date,omitempty"`
	Units                 *string                           `json:"units,omitempty"`
	UpdatedAt             *string                           `json:"updated_at,omitempty"`
}
