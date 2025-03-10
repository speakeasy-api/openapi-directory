// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// ContactsSortByEnum - The field on which to sort the Contacts
type ContactsSortByEnum string

const (
	ContactsSortByEnumCreatedAt ContactsSortByEnum = "created_at"
	ContactsSortByEnumUpdatedAt ContactsSortByEnum = "updated_at"
	ContactsSortByEnumName      ContactsSortByEnum = "name"
	ContactsSortByEnumFirstName ContactsSortByEnum = "first_name"
	ContactsSortByEnumLastName  ContactsSortByEnum = "last_name"
	ContactsSortByEnumEmail     ContactsSortByEnum = "email"
)

func (e *ContactsSortByEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "created_at":
		fallthrough
	case "updated_at":
		fallthrough
	case "name":
		fallthrough
	case "first_name":
		fallthrough
	case "last_name":
		fallthrough
	case "email":
		*e = ContactsSortByEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for ContactsSortByEnum: %s", s)
	}
}

// ContactsSort - Apply sorting
type ContactsSort struct {
	// The field on which to sort the Contacts
	By *ContactsSortByEnum `queryParam:"name=by"`
	// The direction in which to sort the results
	Direction *SortDirectionEnum `queryParam:"name=direction"`
}
