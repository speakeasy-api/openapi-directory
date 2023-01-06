package shared

type GetInstancesResult struct {
	Instances     []Instance1 `json:"instances,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
