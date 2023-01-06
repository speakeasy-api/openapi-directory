package shared

type TagResourceInput struct {
	ResourceARN string `json:"ResourceARN"`
	Tags        []Tag  `json:"Tags"`
}
