package shared

type GetOperationsForResourceResult struct {
	NextPageCount map[string]interface{} `json:"nextPageCount,omitempty"`
	NextPageToken *string                `json:"nextPageToken,omitempty"`
	Operations    []Operation            `json:"operations,omitempty"`
}
