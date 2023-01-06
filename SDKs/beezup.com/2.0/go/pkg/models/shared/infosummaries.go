package shared

type InfoSummaries struct {
	Errors       []ErrorSummary   `json:"errors,omitempty"`
	Informations []InfoSummary    `json:"informations,omitempty"`
	Successes    []SuccessSummary `json:"successes,omitempty"`
	Warnings     []WarningSummary `json:"warnings,omitempty"`
}
