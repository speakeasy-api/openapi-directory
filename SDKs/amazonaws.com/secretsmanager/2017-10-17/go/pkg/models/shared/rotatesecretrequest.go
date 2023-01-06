package shared

type RotateSecretRequest struct {
	ClientRequestToken *string            `json:"ClientRequestToken,omitempty"`
	RotationLambdaARN  *string            `json:"RotationLambdaARN,omitempty"`
	RotationRules      *RotationRulesType `json:"RotationRules,omitempty"`
	SecretID           string             `json:"SecretId"`
}
