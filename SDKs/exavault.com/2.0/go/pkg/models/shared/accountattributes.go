package shared

import (
	"time"
)

type AccountAttributesAllowedIP struct {
	IPEnd   *string `json:"ipEnd,omitempty"`
	IPStart *string `json:"ipStart,omitempty"`
}

type AccountAttributes struct {
	AccountName         *string                      `json:"accountName,omitempty"`
	AccountOnboarding   *bool                        `json:"accountOnboarding,omitempty"`
	AllowedIP           []AccountAttributesAllowedIP `json:"allowedIp,omitempty"`
	Branding            *bool                        `json:"branding,omitempty"`
	BrandingSettings    *BrandingSettings            `json:"brandingSettings,omitempty"`
	ClientID            *int32                       `json:"clientId,omitempty"`
	ComplexPasswords    *bool                        `json:"complexPasswords,omitempty"`
	Created             *time.Time                   `json:"created,omitempty"`
	CustomDomain        *bool                        `json:"customDomain,omitempty"`
	CustomSignature     *string                      `json:"customSignature,omitempty"`
	ExternalDomains     []string                     `json:"externalDomains,omitempty"`
	MaxUsers            *int32                       `json:"maxUsers,omitempty"`
	Modified            *time.Time                   `json:"modified,omitempty"`
	PlanDetails         *PlanDetails                 `json:"planDetails,omitempty"`
	Quota               *Quota                       `json:"quota,omitempty"`
	SecureOnly          *bool                        `json:"secureOnly,omitempty"`
	ShowReferralLinks   *bool                        `json:"showReferralLinks,omitempty"`
	Status              *int32                       `json:"status,omitempty"`
	UserCount           *int32                       `json:"userCount,omitempty"`
	WelcomeEmailContent *string                      `json:"welcomeEmailContent,omitempty"`
	WelcomeEmailSubject *string                      `json:"welcomeEmailSubject,omitempty"`
}
