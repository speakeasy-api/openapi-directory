package shared

import (
	"time"
)

type SharedLinkScopeEnum string

const (
	SharedLinkScopeEnumPublic  SharedLinkScopeEnum = "public"
	SharedLinkScopeEnumCompany SharedLinkScopeEnum = "company"
)

type SharedLinkOutput struct {
	CreatedAt         *time.Time           `json:"created_at,omitempty"`
	DownloadURL       *string              `json:"download_url,omitempty"`
	ExpiresAt         *time.Time           `json:"expires_at,omitempty"`
	PasswordProtected *bool                `json:"password_protected,omitempty"`
	Scope             *SharedLinkScopeEnum `json:"scope,omitempty"`
	Target            *SharedLinkTarget    `json:"target,omitempty"`
	UpdatedAt         *time.Time           `json:"updated_at,omitempty"`
	URL               *string              `json:"url,omitempty"`
}

type SharedLinkInput struct {
	DownloadURL *string              `json:"download_url,omitempty"`
	Password    *string              `json:"password,omitempty"`
	Scope       *SharedLinkScopeEnum `json:"scope,omitempty"`
	TargetID    string               `json:"target_id"`
}
