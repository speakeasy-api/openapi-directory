// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// ReferenceListItem - A genome reference.
type ReferenceListItem struct {
	Arn              string               `json:"arn"`
	CreationTime     time.Time            `json:"creationTime"`
	Description      *string              `json:"description,omitempty"`
	ID               string               `json:"id"`
	Md5              string               `json:"md5"`
	Name             *string              `json:"name,omitempty"`
	ReferenceStoreID string               `json:"referenceStoreId"`
	Status           *ReferenceStatusEnum `json:"status,omitempty"`
	UpdateTime       time.Time            `json:"updateTime"`
}
