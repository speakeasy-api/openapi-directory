package shared

type ListEntitiesDetectionJobsRequest struct {
	Filter     *EntitiesDetectionJobFilter `json:"Filter,omitempty"`
	MaxResults map[string]interface{}      `json:"MaxResults,omitempty"`
	NextToken  *string                     `json:"NextToken,omitempty"`
}
