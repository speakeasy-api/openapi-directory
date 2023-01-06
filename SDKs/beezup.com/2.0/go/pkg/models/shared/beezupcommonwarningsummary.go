package shared

type BeezUpCommonWarningSummary struct {
	TechnicalErrorMessage *string           `json:"technicalErrorMessage,omitempty"`
	WarningArguments      map[string]string `json:"warningArguments,omitempty"`
	WarningCode           *string           `json:"warningCode,omitempty"`
	WarningMessage        *string           `json:"warningMessage,omitempty"`
}
