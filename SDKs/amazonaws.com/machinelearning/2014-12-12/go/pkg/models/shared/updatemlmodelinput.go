package shared

type UpdateMlModelInput struct {
	MLModelID      string   `json:"MLModelId"`
	MLModelName    *string  `json:"MLModelName,omitempty"`
	ScoreThreshold *float32 `json:"ScoreThreshold,omitempty"`
}
