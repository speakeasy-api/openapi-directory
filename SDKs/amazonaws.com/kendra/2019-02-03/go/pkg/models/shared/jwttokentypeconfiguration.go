package shared

// JwtTokenTypeConfiguration
// Configuration information for the JWT token type.
type JwtTokenTypeConfiguration struct {
	ClaimRegex             *string         `json:"ClaimRegex,omitempty"`
	GroupAttributeField    *string         `json:"GroupAttributeField,omitempty"`
	Issuer                 *string         `json:"Issuer,omitempty"`
	KeyLocation            KeyLocationEnum `json:"KeyLocation"`
	SecretManagerArn       *string         `json:"SecretManagerArn,omitempty"`
	URL                    *string         `json:"URL,omitempty"`
	UserNameAttributeField *string         `json:"UserNameAttributeField,omitempty"`
}
