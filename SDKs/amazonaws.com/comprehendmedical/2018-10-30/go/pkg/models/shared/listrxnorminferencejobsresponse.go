package shared

type ListRxNormInferenceJobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties1 `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
	NextToken                               *string                                `json:"NextToken,omitempty"`
}
