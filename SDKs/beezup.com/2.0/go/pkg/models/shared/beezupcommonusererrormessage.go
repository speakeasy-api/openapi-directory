package shared

type BeezUpCommonUserErrorMessageArguments struct {
	Name  string                 `json:"name"`
	Value map[string]interface{} `json:"value"`
}

type BeezUpCommonUserErrorMessage struct {
	Arguments   []BeezUpCommonUserErrorMessageArguments `json:"arguments,omitempty"`
	Code        string                                  `json:"code"`
	CultureName *string                                 `json:"cultureName,omitempty"`
	DocURL      *string                                 `json:"docUrl,omitempty"`
	Message     string                                  `json:"message"`
}
