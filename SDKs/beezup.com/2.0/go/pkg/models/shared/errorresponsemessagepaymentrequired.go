package shared

type ErrorResponseMessagePaymentRequired struct {
	Errors []BeezUpCommonUserErrorMessage           `json:"errors"`
	Links  ErrorResponseMessagePaymentRequiredLinks `json:"links"`
}
