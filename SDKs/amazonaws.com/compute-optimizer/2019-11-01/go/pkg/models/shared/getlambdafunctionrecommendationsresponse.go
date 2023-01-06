package shared

type GetLambdaFunctionRecommendationsResponse struct {
	LambdaFunctionRecommendations map[string]interface{} `json:"lambdaFunctionRecommendations,omitempty"`
	NextToken                     *string                `json:"nextToken,omitempty"`
}
