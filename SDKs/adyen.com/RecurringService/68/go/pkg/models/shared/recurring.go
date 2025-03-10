// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
	"time"
)

// RecurringContractEnum - The type of recurring contract to be used.
// Possible values:
// * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).
// * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).
// * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.
// * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).
type RecurringContractEnum string

const (
	RecurringContractEnumOneclick  RecurringContractEnum = "ONECLICK"
	RecurringContractEnumRecurring RecurringContractEnum = "RECURRING"
	RecurringContractEnumPayout    RecurringContractEnum = "PAYOUT"
)

func (e RecurringContractEnum) ToPointer() *RecurringContractEnum {
	return &e
}

func (e *RecurringContractEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "ONECLICK":
		fallthrough
	case "RECURRING":
		fallthrough
	case "PAYOUT":
		*e = RecurringContractEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RecurringContractEnum: %v", v)
	}
}

// RecurringTokenServiceEnum - The name of the token service.
type RecurringTokenServiceEnum string

const (
	RecurringTokenServiceEnumVisatokenservice RecurringTokenServiceEnum = "VISATOKENSERVICE"
	RecurringTokenServiceEnumMctokenservice   RecurringTokenServiceEnum = "MCTOKENSERVICE"
)

func (e RecurringTokenServiceEnum) ToPointer() *RecurringTokenServiceEnum {
	return &e
}

func (e *RecurringTokenServiceEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "VISATOKENSERVICE":
		fallthrough
	case "MCTOKENSERVICE":
		*e = RecurringTokenServiceEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RecurringTokenServiceEnum: %v", v)
	}
}

type Recurring struct {
	// The type of recurring contract to be used.
	// Possible values:
	// * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).
	// * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).
	// * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.
	// * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/online-payments/online-payouts).
	Contract *RecurringContractEnum `json:"contract,omitempty"`
	// A descriptive name for this detail.
	RecurringDetailName *string `json:"recurringDetailName,omitempty"`
	// Date after which no further authorisations shall be performed. Only for 3D Secure 2.
	RecurringExpiry *time.Time `json:"recurringExpiry,omitempty"`
	// Minimum number of days between authorisations. Only for 3D Secure 2.
	RecurringFrequency *string `json:"recurringFrequency,omitempty"`
	// The name of the token service.
	TokenService *RecurringTokenServiceEnum `json:"tokenService,omitempty"`
}
