package shared

type ImportAlreadyInProgressResponse struct {
	Errors []BeezUpCommonUserErrorMessage       `json:"errors"`
	Links  ImportAlreadyInProgressResponseLinks `json:"links"`
}
