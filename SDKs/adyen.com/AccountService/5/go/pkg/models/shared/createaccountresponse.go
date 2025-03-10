// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// CreateAccountResponsePayoutSpeedEnum - Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
type CreateAccountResponsePayoutSpeedEnum string

const (
	CreateAccountResponsePayoutSpeedEnumInstant  CreateAccountResponsePayoutSpeedEnum = "INSTANT"
	CreateAccountResponsePayoutSpeedEnumSameDay  CreateAccountResponsePayoutSpeedEnum = "SAME_DAY"
	CreateAccountResponsePayoutSpeedEnumStandard CreateAccountResponsePayoutSpeedEnum = "STANDARD"
)

func (e CreateAccountResponsePayoutSpeedEnum) ToPointer() *CreateAccountResponsePayoutSpeedEnum {
	return &e
}

func (e *CreateAccountResponsePayoutSpeedEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "INSTANT":
		fallthrough
	case "SAME_DAY":
		fallthrough
	case "STANDARD":
		*e = CreateAccountResponsePayoutSpeedEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAccountResponsePayoutSpeedEnum: %v", v)
	}
}

// CreateAccountResponseStatusEnum - The status of the account.
// >Permitted values: `Active`.
type CreateAccountResponseStatusEnum string

const (
	CreateAccountResponseStatusEnumActive    CreateAccountResponseStatusEnum = "Active"
	CreateAccountResponseStatusEnumClosed    CreateAccountResponseStatusEnum = "Closed"
	CreateAccountResponseStatusEnumInactive  CreateAccountResponseStatusEnum = "Inactive"
	CreateAccountResponseStatusEnumSuspended CreateAccountResponseStatusEnum = "Suspended"
)

func (e CreateAccountResponseStatusEnum) ToPointer() *CreateAccountResponseStatusEnum {
	return &e
}

func (e *CreateAccountResponseStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Active":
		fallthrough
	case "Closed":
		fallthrough
	case "Inactive":
		fallthrough
	case "Suspended":
		*e = CreateAccountResponseStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for CreateAccountResponseStatusEnum: %v", v)
	}
}

// CreateAccountResponse - OK - the request has succeeded.
type CreateAccountResponse struct {
	// The code of the new account.
	AccountCode *string `json:"accountCode,omitempty"`
	// The code of the account holder.
	AccountHolderCode *string `json:"accountHolderCode,omitempty"`
	// The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
	BankAccountUUID *string `json:"bankAccountUUID,omitempty"`
	// The description of the account.
	Description *string `json:"description,omitempty"`
	// A list of fields that caused the `/createAccount` request to fail.
	InvalidFields []ErrorFieldType `json:"invalidFields,omitempty"`
	// A set of key and value pairs containing metadata.
	Metadata map[string]string `json:"metadata,omitempty"`
	// The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.
	PayoutMethodCode *string                 `json:"payoutMethodCode,omitempty"`
	PayoutSchedule   *PayoutScheduleResponse `json:"payoutSchedule,omitempty"`
	// Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
	PayoutSpeed *CreateAccountResponsePayoutSpeedEnum `json:"payoutSpeed,omitempty"`
	// The reference of a request. Can be used to uniquely identify the request.
	PspReference *string `json:"pspReference,omitempty"`
	// The result code.
	ResultCode *string `json:"resultCode,omitempty"`
	// The status of the account.
	// >Permitted values: `Active`.
	Status *CreateAccountResponseStatusEnum `json:"status,omitempty"`
}
