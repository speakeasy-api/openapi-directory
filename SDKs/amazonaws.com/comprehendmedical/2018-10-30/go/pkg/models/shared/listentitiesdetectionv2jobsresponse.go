package shared

type ListEntitiesDetectionV2JobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties1 `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
	NextToken                               *string                                `json:"NextToken,omitempty"`
}
