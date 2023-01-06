package shared

type GetMlModelInput struct {
	MLModelID string `json:"MLModelId"`
	Verbose   *bool  `json:"Verbose,omitempty"`
}
