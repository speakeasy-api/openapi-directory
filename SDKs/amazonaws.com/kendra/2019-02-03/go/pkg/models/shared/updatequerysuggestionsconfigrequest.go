package shared

type UpdateQuerySuggestionsConfigRequest struct {
	IncludeQueriesWithoutUserInformation *bool     `json:"IncludeQueriesWithoutUserInformation,omitempty"`
	IndexID                              string    `json:"IndexId"`
	MinimumNumberOfQueryingUsers         *int64    `json:"MinimumNumberOfQueryingUsers,omitempty"`
	MinimumQueryCount                    *int64    `json:"MinimumQueryCount,omitempty"`
	Mode                                 *ModeEnum `json:"Mode,omitempty"`
	QueryLogLookBackWindowInDays         *int64    `json:"QueryLogLookBackWindowInDays,omitempty"`
}
