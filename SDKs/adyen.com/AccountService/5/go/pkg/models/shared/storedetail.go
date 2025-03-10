// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// StoreDetailShopperInteractionEnum - The sales channel. Possible values: **Ecommerce**, **POS**.
type StoreDetailShopperInteractionEnum string

const (
	StoreDetailShopperInteractionEnumEcommerce StoreDetailShopperInteractionEnum = "Ecommerce"
	StoreDetailShopperInteractionEnumPos       StoreDetailShopperInteractionEnum = "POS"
)

func (e StoreDetailShopperInteractionEnum) ToPointer() *StoreDetailShopperInteractionEnum {
	return &e
}

func (e *StoreDetailShopperInteractionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Ecommerce":
		fallthrough
	case "POS":
		*e = StoreDetailShopperInteractionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StoreDetailShopperInteractionEnum: %v", v)
	}
}

// StoreDetailStatusEnum - The status of the store. Possible values: **Pending**, **Active**, **Inactive**, **InactiveWithModifications**, **Closed**.
type StoreDetailStatusEnum string

const (
	StoreDetailStatusEnumActive                    StoreDetailStatusEnum = "Active"
	StoreDetailStatusEnumClosed                    StoreDetailStatusEnum = "Closed"
	StoreDetailStatusEnumInactive                  StoreDetailStatusEnum = "Inactive"
	StoreDetailStatusEnumInactiveWithModifications StoreDetailStatusEnum = "InactiveWithModifications"
	StoreDetailStatusEnumPending                   StoreDetailStatusEnum = "Pending"
)

func (e StoreDetailStatusEnum) ToPointer() *StoreDetailStatusEnum {
	return &e
}

func (e *StoreDetailStatusEnum) UnmarshalJSON(data []byte) error {
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
	case "InactiveWithModifications":
		fallthrough
	case "Pending":
		*e = StoreDetailStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for StoreDetailStatusEnum: %v", v)
	}
}

type StoreDetail struct {
	Address ViasAddress `json:"address"`
	// The phone number of the store provided as a single string.  It will be handled as a landline phone.
	//
	// Examples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
	FullPhoneNumber *string `json:"fullPhoneNumber,omitempty"`
	// Store logo for payment method setup.
	Logo *string `json:"logo,omitempty"`
	// The merchant account to which the store belongs.
	MerchantAccount string `json:"merchantAccount"`
	// The merchant category code (MCC) that classifies the business of the account holder.
	MerchantCategoryCode string `json:"merchantCategoryCode"`
	// Merchant house number for payment method setup.
	MerchantHouseNumber *string          `json:"merchantHouseNumber,omitempty"`
	PhoneNumber         *ViasPhoneNumber `json:"phoneNumber,omitempty"`
	// The sales channel. Possible values: **Ecommerce**, **POS**.
	ShopperInteraction *StoreDetailShopperInteractionEnum `json:"shopperInteraction,omitempty"`
	// The unique reference for the split configuration, returned when you configure splits in your Customer Area. When this is provided, the `virtualAccount` is also required. Adyen uses the configuration and the `virtualAccount` to split funds between accounts in your platform.
	SplitConfigurationUUID *string `json:"splitConfigurationUUID,omitempty"`
	// The status of the store. Possible values: **Pending**, **Active**, **Inactive**, **InactiveWithModifications**, **Closed**.
	Status *StoreDetailStatusEnum `json:"status,omitempty"`
	// Adyen-generated unique alphanumeric identifier (UUID) for the store, returned in the response when you create a store. Required when updating an existing store in an `/updateAccountHolder` request.
	Store *string `json:"store,omitempty"`
	// The name of the account holder's store. This value is shown in shopper statements.
	//
	// * Length: Between 3 to 22 characters
	//
	// * The following characters are *not* supported: **:;}{$#@!|<>%^*+=\\**
	StoreName *string `json:"storeName,omitempty"`
	// Your unique identifier for the store. The Customer Area also uses this value for the store description.
	//
	//  * Length: Between 3 to 128 characters
	//
	// * The following characters are *not* supported: **:;}{$#@!|<>%^*+=\\**
	StoreReference *string `json:"storeReference,omitempty"`
	// The account holder's `accountCode` where the split amount will be sent. Required when you provide the `splitConfigurationUUID`.
	VirtualAccount *string `json:"virtualAccount,omitempty"`
	// URL of the ecommerce store.
	WebAddress *string `json:"webAddress,omitempty"`
}
