package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAccountHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateAccountUpdateAccountRequestBodyAllowedIPRanges struct {
	IPEnd   *string `json:"ipEnd,omitempty"`
	IPStart *string `json:"ipStart,omitempty"`
}

type UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues struct {
	CompanyName *string `json:"companyName,omitempty"`
	CustomEmail *string `json:"customEmail,omitempty"`
	Theme       *string `json:"theme,omitempty"`
}

type UpdateAccountUpdateAccountRequestBodyAccountQuotaValues struct {
	NoticeEnabled               *bool  `json:"noticeEnabled,omitempty"`
	NoticeThreshold             *int64 `json:"noticeThreshold,omitempty"`
	TransactionsNoticeEnabled   *bool  `json:"transactionsNoticeEnabled,omitempty"`
	TransactionsNoticeThreshold *int64 `json:"transactionsNoticeThreshold,omitempty"`
}

type UpdateAccountUpdateAccountRequestBody struct {
	AccountOnboarding *bool                                                        `json:"accountOnboarding,omitempty"`
	AllowedIPRanges   []UpdateAccountUpdateAccountRequestBodyAllowedIPRanges       `json:"allowedIpRanges,omitempty"`
	BrandingSettings  *UpdateAccountUpdateAccountRequestBodyBrandingSettingsValues `json:"brandingSettings,omitempty"`
	ComplexPasswords  *bool                                                        `json:"complexPasswords,omitempty"`
	CustomSignature   *string                                                      `json:"customSignature,omitempty"`
	EmailContent      *string                                                      `json:"emailContent,omitempty"`
	EmailSubject      *string                                                      `json:"emailSubject,omitempty"`
	ExternalDomain    *string                                                      `json:"externalDomain,omitempty"`
	Quota             *UpdateAccountUpdateAccountRequestBodyAccountQuotaValues     `json:"quota,omitempty"`
	SecureOnly        *bool                                                        `json:"secureOnly,omitempty"`
	ShowReferralLinks *bool                                                        `json:"showReferralLinks,omitempty"`
}

type UpdateAccountRequest struct {
	Headers UpdateAccountHeaders
	Request *UpdateAccountUpdateAccountRequestBody `request:"mediaType=application/json"`
}

type UpdateAccountResponse struct {
	AccountResponse *shared.AccountResponse
	ContentType     string
	StatusCode      int64
}
