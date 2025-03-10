// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CashPaymentPaymentMethodEnum - `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
type CashPaymentPaymentMethodEnum string

const (
	CashPaymentPaymentMethodEnumCash CashPaymentPaymentMethodEnum = "CASH"
	CashPaymentPaymentMethodEnumChck CashPaymentPaymentMethodEnum = "CHCK"
	CashPaymentPaymentMethodEnumDbit CashPaymentPaymentMethodEnum = "DBIT"
	CashPaymentPaymentMethodEnumCrdt CashPaymentPaymentMethodEnum = "CRDT"
	CashPaymentPaymentMethodEnumAmex CashPaymentPaymentMethodEnum = "AMEX"
	CashPaymentPaymentMethodEnumVisa CashPaymentPaymentMethodEnum = "VISA"
	CashPaymentPaymentMethodEnumMstr CashPaymentPaymentMethodEnum = "MSTR"
	CashPaymentPaymentMethodEnumDisc CashPaymentPaymentMethodEnum = "DISC"
	CashPaymentPaymentMethodEnumSqr1 CashPaymentPaymentMethodEnum = "SQR1"
	CashPaymentPaymentMethodEnumSqre CashPaymentPaymentMethodEnum = "SQRE"
	CashPaymentPaymentMethodEnumPtpa CashPaymentPaymentMethodEnum = "PTPA"
	CashPaymentPaymentMethodEnumOnpt CashPaymentPaymentMethodEnum = "ONPT"
	CashPaymentPaymentMethodEnumOthr CashPaymentPaymentMethodEnum = "OTHR"
)

func (e CashPaymentPaymentMethodEnum) ToPointer() *CashPaymentPaymentMethodEnum {
	return &e
}

func (e *CashPaymentPaymentMethodEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CASH":
		fallthrough
	case "CHCK":
		fallthrough
	case "DBIT":
		fallthrough
	case "CRDT":
		fallthrough
	case "AMEX":
		fallthrough
	case "VISA":
		fallthrough
	case "MSTR":
		fallthrough
	case "DISC":
		fallthrough
	case "SQR1":
		fallthrough
	case "SQRE":
		fallthrough
	case "PTPA":
		fallthrough
	case "ONPT":
		fallthrough
	case "OTHR":
		*e = CashPaymentPaymentMethodEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CashPaymentPaymentMethodEnum: %v", v)
	}
}

// CashPaymentPaymentTransactionTypeEnum - `"" for Credit, "REF" for Refund, "COR" for Correction, "COPAY" for Copay, "COINSR" for Coinsurance, "OTHR" for Other`
type CashPaymentPaymentTransactionTypeEnum string

const (
	CashPaymentPaymentTransactionTypeEnumUnknown CashPaymentPaymentTransactionTypeEnum = ""
	CashPaymentPaymentTransactionTypeEnumRef     CashPaymentPaymentTransactionTypeEnum = "REF"
	CashPaymentPaymentTransactionTypeEnumCor     CashPaymentPaymentTransactionTypeEnum = "COR"
	CashPaymentPaymentTransactionTypeEnumCopay   CashPaymentPaymentTransactionTypeEnum = "COPAY"
	CashPaymentPaymentTransactionTypeEnumCoinsr  CashPaymentPaymentTransactionTypeEnum = "COINSR"
	CashPaymentPaymentTransactionTypeEnumOthr    CashPaymentPaymentTransactionTypeEnum = "OTHR"
)

func (e CashPaymentPaymentTransactionTypeEnum) ToPointer() *CashPaymentPaymentTransactionTypeEnum {
	return &e
}

func (e *CashPaymentPaymentTransactionTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "":
		fallthrough
	case "REF":
		fallthrough
	case "COR":
		fallthrough
	case "COPAY":
		fallthrough
	case "COINSR":
		fallthrough
	case "OTHR":
		*e = CashPaymentPaymentTransactionTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CashPaymentPaymentTransactionTypeEnum: %v", v)
	}
}

// CashPayment - Created
type CashPayment struct {
	// Amount of cash for this payment, cannot be zero
	Amount *float64 `json:"amount,omitempty"`
	// If this is absent, the apponitment will be inferred from line item
	Appointment *int64  `json:"appointment,omitempty"`
	CreatedAt   *string `json:"created_at,omitempty"`
	CreatedBy   *string `json:"created_by,omitempty"`
	Doctor      *int64  `json:"doctor,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	LineItem    *int64  `json:"line_item,omitempty"`
	Notes       *string `json:"notes,omitempty"`
	Patient     int64   `json:"patient"`
	// `"CASH", "CHCK" for Check, "DBIT" for Debit, "CRDT" for Credit Card, "AMEX" for American Express, "VISA", "MSTR" for Mastercard, "DISC" for Discover, "SQR1" for Square (legacy), "SQRE" for Square, "PTPA" for Patient Payments, "ONPT" for onpatient, "OTHR" for Other`
	PaymentMethod *CashPaymentPaymentMethodEnum `json:"payment_method,omitempty"`
	// `"" for Credit, "REF" for Refund, "COR" for Correction, "COPAY" for Copay, "COINSR" for Coinsurance, "OTHR" for Other`
	PaymentTransactionType *CashPaymentPaymentTransactionTypeEnum `json:"payment_transaction_type,omitempty"`
	PostedDate             *string                                `json:"posted_date,omitempty"`
	ReceivedDate           *string                                `json:"received_date,omitempty"`
	TraceNumber            *string                                `json:"trace_number,omitempty"`
	UpdatedAt              *string                                `json:"updated_at,omitempty"`
}
