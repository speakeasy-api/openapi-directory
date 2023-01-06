package shared

type ListIcd10CmInferenceJobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties1 `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
	NextToken                               *string                                `json:"NextToken,omitempty"`
}
