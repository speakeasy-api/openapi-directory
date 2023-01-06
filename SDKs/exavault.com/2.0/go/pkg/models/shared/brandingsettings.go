package shared

type BrandingSettings struct {
	CompanyName         *string `json:"companyName,omitempty"`
	CustomEmail         *string `json:"customEmail,omitempty"`
	Logo                *string `json:"logo,omitempty"`
	LogoExt             *string `json:"logoExt,omitempty"`
	Theme               *string `json:"theme,omitempty"`
	VerifiedDomain      *string `json:"verifiedDomain,omitempty"`
	VerifiedDomainID    *string `json:"verifiedDomainId,omitempty"`
	VerifiedDomainValid *bool   `json:"verifiedDomainValid,omitempty"`
}
