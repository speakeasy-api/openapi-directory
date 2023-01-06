package shared

import (
	"time"
)

// CreateUserPoolClientResponseUserPoolClient
// Contains information about a user pool client.
type CreateUserPoolClientResponseUserPoolClient struct {
	AccessTokenValidity             *int64                              `json:"AccessTokenValidity,omitempty"`
	AllowedOAuthFlows               []OAuthFlowTypeEnum                 `json:"AllowedOAuthFlows,omitempty"`
	AllowedOAuthFlowsUserPoolClient *bool                               `json:"AllowedOAuthFlowsUserPoolClient,omitempty"`
	AllowedOAuthScopes              []string                            `json:"AllowedOAuthScopes,omitempty"`
	AnalyticsConfiguration          *AnalyticsConfigurationType         `json:"AnalyticsConfiguration,omitempty"`
	CallbackURLs                    []string                            `json:"CallbackURLs,omitempty"`
	ClientID                        *string                             `json:"ClientId,omitempty"`
	ClientName                      *string                             `json:"ClientName,omitempty"`
	ClientSecret                    *string                             `json:"ClientSecret,omitempty"`
	CreationDate                    *time.Time                          `json:"CreationDate,omitempty"`
	DefaultRedirectURI              *string                             `json:"DefaultRedirectURI,omitempty"`
	EnableTokenRevocation           *bool                               `json:"EnableTokenRevocation,omitempty"`
	ExplicitAuthFlows               []ExplicitAuthFlowsTypeEnum         `json:"ExplicitAuthFlows,omitempty"`
	IDTokenValidity                 *int64                              `json:"IdTokenValidity,omitempty"`
	LastModifiedDate                *time.Time                          `json:"LastModifiedDate,omitempty"`
	LogoutURLs                      []string                            `json:"LogoutURLs,omitempty"`
	PreventUserExistenceErrors      *PreventUserExistenceErrorTypesEnum `json:"PreventUserExistenceErrors,omitempty"`
	ReadAttributes                  []string                            `json:"ReadAttributes,omitempty"`
	RefreshTokenValidity            *int64                              `json:"RefreshTokenValidity,omitempty"`
	SupportedIdentityProviders      []string                            `json:"SupportedIdentityProviders,omitempty"`
	TokenValidityUnits              *TokenValidityUnitsType             `json:"TokenValidityUnits,omitempty"`
	UserPoolID                      *string                             `json:"UserPoolId,omitempty"`
	WriteAttributes                 []string                            `json:"WriteAttributes,omitempty"`
}

// CreateUserPoolClientResponse
// Represents the response from the server to create a user pool client.
type CreateUserPoolClientResponse struct {
	UserPoolClient *CreateUserPoolClientResponseUserPoolClient `json:"UserPoolClient,omitempty"`
}
