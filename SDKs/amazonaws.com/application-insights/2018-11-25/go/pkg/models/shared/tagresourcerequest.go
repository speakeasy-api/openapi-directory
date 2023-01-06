package shared

type TagResourceRequest struct {
	ResourceARN string `json:"ResourceARN"`
	Tags        []Tag  `json:"Tags"`
}
