package shared

type ListTagsForResourceRequest struct {
	Limit       *int64  `json:"Limit,omitempty"`
	NextMarker  *string `json:"NextMarker,omitempty"`
	ResourceARN string  `json:"ResourceARN"`
}
