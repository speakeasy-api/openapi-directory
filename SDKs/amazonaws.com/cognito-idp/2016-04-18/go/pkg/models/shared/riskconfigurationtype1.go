package shared

import (
	"time"
)

// RiskConfigurationType1
// The risk configuration type.
type RiskConfigurationType1 struct {
	AccountTakeoverRiskConfiguration        *AccountTakeoverRiskConfigurationType1       `json:"AccountTakeoverRiskConfiguration,omitempty"`
	ClientID                                *string                                      `json:"ClientId,omitempty"`
	CompromisedCredentialsRiskConfiguration *CompromisedCredentialsRiskConfigurationType `json:"CompromisedCredentialsRiskConfiguration,omitempty"`
	LastModifiedDate                        *time.Time                                   `json:"LastModifiedDate,omitempty"`
	RiskExceptionConfiguration              *RiskExceptionConfigurationType              `json:"RiskExceptionConfiguration,omitempty"`
	UserPoolID                              *string                                      `json:"UserPoolId,omitempty"`
}
