// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// GetListenerResponse - Success
type GetListenerResponse struct {
	Arn           *string               `json:"arn,omitempty"`
	CreatedAt     *time.Time            `json:"createdAt,omitempty"`
	DefaultAction *RuleAction           `json:"defaultAction,omitempty"`
	ID            *string               `json:"id,omitempty"`
	LastUpdatedAt *time.Time            `json:"lastUpdatedAt,omitempty"`
	Name          *string               `json:"name,omitempty"`
	Port          *int64                `json:"port,omitempty"`
	Protocol      *ListenerProtocolEnum `json:"protocol,omitempty"`
	ServiceArn    *string               `json:"serviceArn,omitempty"`
	ServiceID     *string               `json:"serviceId,omitempty"`
}
