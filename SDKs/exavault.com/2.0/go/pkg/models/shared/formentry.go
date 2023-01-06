package shared

import (
	"time"
)

type FormEntryAttributesStatusEnum string

const (
	FormEntryAttributesStatusEnumPending   FormEntryAttributesStatusEnum = "pending"
	FormEntryAttributesStatusEnumCompleted FormEntryAttributesStatusEnum = "completed"
)

type FormEntryAttributes struct {
	Created  *time.Time                     `json:"created,omitempty"`
	Fields   []FormEntryField               `json:"fields,omitempty"`
	Modified *time.Time                     `json:"modified,omitempty"`
	Paths    []string                       `json:"paths,omitempty"`
	Status   *FormEntryAttributesStatusEnum `json:"status,omitempty"`
}

// FormEntry
// Contains the data submitted for a form.
type FormEntry struct {
	Attributes *FormEntryAttributes `json:"attributes,omitempty"`
	ID         *int64               `json:"id,omitempty"`
	Type       *string              `json:"type,omitempty"`
}
