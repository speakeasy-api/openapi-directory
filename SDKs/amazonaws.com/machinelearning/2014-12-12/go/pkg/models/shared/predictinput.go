package shared

type PredictInput struct {
	MLModelID       string            `json:"MLModelId"`
	PredictEndpoint string            `json:"PredictEndpoint"`
	Record          map[string]string `json:"Record"`
}
