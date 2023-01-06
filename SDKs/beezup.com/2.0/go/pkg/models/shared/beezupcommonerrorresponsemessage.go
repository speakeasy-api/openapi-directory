package shared

type BeezUpCommonErrorResponseMessage struct {
	Errors []BeezUpCommonUserErrorMessage `json:"errors"`
}
