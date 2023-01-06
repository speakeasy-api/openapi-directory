package shared

type CreateMlModelInput struct {
	MLModelID            string            `json:"MLModelId"`
	MLModelName          *string           `json:"MLModelName,omitempty"`
	MLModelType          MlModelTypeEnum   `json:"MLModelType"`
	Parameters           map[string]string `json:"Parameters,omitempty"`
	Recipe               *string           `json:"Recipe,omitempty"`
	RecipeURI            *string           `json:"RecipeUri,omitempty"`
	TrainingDataSourceID string            `json:"TrainingDataSourceId"`
}
