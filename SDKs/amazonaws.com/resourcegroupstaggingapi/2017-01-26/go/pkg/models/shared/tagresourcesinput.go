package shared

type TagResourcesInput struct {
	ResourceARNList []string          `json:"ResourceARNList"`
	Tags            map[string]string `json:"Tags"`
}
