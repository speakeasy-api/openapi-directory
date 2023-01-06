package shared

type BeezUpCommonInfoSummaries struct {
	Errors       []BeezUpCommonErrorSummary   `json:"errors,omitempty"`
	Informations []BeezUpCommonInfoSummary    `json:"informations,omitempty"`
	Successes    []BeezUpCommonSuccessSummary `json:"successes,omitempty"`
	Warnings     []BeezUpCommonWarningSummary `json:"warnings,omitempty"`
}
