package shared

type ListPhiDetectionJobsResponse struct {
	ComprehendMedicalAsyncJobPropertiesList []ComprehendMedicalAsyncJobProperties1 `json:"ComprehendMedicalAsyncJobPropertiesList,omitempty"`
	NextToken                               *string                                `json:"NextToken,omitempty"`
}
