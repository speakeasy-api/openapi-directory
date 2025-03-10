// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// CreateContactListRequest - A request object is used to create a contact list from one of available contact sources
type CreateContactListRequest struct {
	// A list of ids of existing contacts in CallFire system
	ContactIds []int64 `json:"contactIds,omitempty"`
	// List of numbers in E.164 format (11-digit). Example: 12132000384
	ContactNumbers []string `json:"contactNumbers,omitempty"`
	// A type of a phone number (homePhone, workPhone, mobilePhone). This parameter is used with contactNumbers and specifies which types of phone numbers are included to a contact list
	ContactNumbersField *string `json:"contactNumbersField,omitempty"`
	// A list of new contact objects to be added
	Contacts []Contact `json:"contacts,omitempty"`
	// A name of a contact list
	Name *string `json:"name,omitempty"`
	// A flag to indicate how to define property names for contacts. If true, uses the field and property names exactly as defined. If false will assign custom properties and fields to A, B, C, etc
	UseCustomFields *bool `json:"useCustomFields,omitempty"`
}
