// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// GetDomainResponse - Success
type GetDomainResponse struct {
	CreatedTime  time.Time         `json:"createdTime"`
	DomainArn    string            `json:"domainArn"`
	DomainID     string            `json:"domainId"`
	DomainStatus DomainStatusEnum  `json:"domainStatus"`
	Name         string            `json:"name"`
	Tags         map[string]string `json:"tags,omitempty"`
}
