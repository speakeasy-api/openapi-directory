package shared

type StartRxNormInferenceJobRequest struct {
	ClientRequestToken *string          `json:"ClientRequestToken,omitempty"`
	DataAccessRoleArn  string           `json:"DataAccessRoleArn"`
	InputDataConfig    InputDataConfig1 `json:"InputDataConfig"`
	JobName            *string          `json:"JobName,omitempty"`
	KMSKey             *string          `json:"KMSKey,omitempty"`
	LanguageCode       LanguageCodeEnum `json:"LanguageCode"`
	OutputDataConfig   OutputDataConfig `json:"OutputDataConfig"`
}
