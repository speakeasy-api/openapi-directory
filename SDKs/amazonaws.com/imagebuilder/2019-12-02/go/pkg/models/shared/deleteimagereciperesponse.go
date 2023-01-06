package shared

type DeleteImageRecipeResponse struct {
	ImageRecipeArn *string                `json:"imageRecipeArn,omitempty"`
	RequestID      map[string]interface{} `json:"requestId,omitempty"`
}
