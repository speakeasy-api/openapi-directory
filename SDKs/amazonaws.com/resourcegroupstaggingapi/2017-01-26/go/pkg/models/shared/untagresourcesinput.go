package shared

type UntagResourcesInput struct {
	ResourceARNList []string `json:"ResourceARNList"`
	TagKeys         []string `json:"TagKeys"`
}
