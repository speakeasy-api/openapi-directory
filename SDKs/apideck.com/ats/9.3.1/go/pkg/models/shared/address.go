// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

type AddressTypeEnum string

const (
	AddressTypeEnumPrimary   AddressTypeEnum = "primary"
	AddressTypeEnumSecondary AddressTypeEnum = "secondary"
	AddressTypeEnumHome      AddressTypeEnum = "home"
	AddressTypeEnumOffice    AddressTypeEnum = "office"
	AddressTypeEnumShipping  AddressTypeEnum = "shipping"
	AddressTypeEnumBilling   AddressTypeEnum = "billing"
	AddressTypeEnumOther     AddressTypeEnum = "other"
)

func (e AddressTypeEnum) ToPointer() *AddressTypeEnum {
	return &e
}

func (e *AddressTypeEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "primary":
		fallthrough
	case "secondary":
		fallthrough
	case "home":
		fallthrough
	case "office":
		fallthrough
	case "shipping":
		fallthrough
	case "billing":
		fallthrough
	case "other":
		*e = AddressTypeEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AddressTypeEnum: %v", v)
	}
}

type Address struct {
	// Name of city.
	City        *string `json:"city,omitempty"`
	ContactName *string `json:"contact_name,omitempty"`
	// country code according to ISO 3166-1 alpha-2.
	Country *string `json:"country,omitempty"`
	// Address field that holds a sublocality, such as a county
	County   *string `json:"county,omitempty"`
	Email    *string `json:"email,omitempty"`
	Fax      *string `json:"fax,omitempty"`
	ID       *string `json:"id,omitempty"`
	Latitude *string `json:"latitude,omitempty"`
	// Line 1 of the address e.g. number, street, suite, apt #, etc.
	Line1 *string `json:"line1,omitempty"`
	// Line 2 of the address
	Line2 *string `json:"line2,omitempty"`
	// Line 3 of the address
	Line3 *string `json:"line3,omitempty"`
	// Line 4 of the address
	Line4       *string `json:"line4,omitempty"`
	Longitude   *string `json:"longitude,omitempty"`
	Name        *string `json:"name,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
	// Zip code or equivalent.
	PostalCode *string `json:"postal_code,omitempty"`
	// A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
	RowVersion *string `json:"row_version,omitempty"`
	Salutation *string `json:"salutation,omitempty"`
	// Name of state
	State *string `json:"state,omitempty"`
	// Street number
	StreetNumber *string          `json:"street_number,omitempty"`
	String       *string          `json:"string,omitempty"`
	Type         *AddressTypeEnum `json:"type,omitempty"`
	Website      *string          `json:"website,omitempty"`
}
