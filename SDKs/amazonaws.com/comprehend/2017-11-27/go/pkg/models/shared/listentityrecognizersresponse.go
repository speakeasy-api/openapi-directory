package shared

type ListEntityRecognizersResponse struct {
	EntityRecognizerPropertiesList []EntityRecognizerProperties1 `json:"EntityRecognizerPropertiesList,omitempty"`
	NextToken                      *string                       `json:"NextToken,omitempty"`
}
