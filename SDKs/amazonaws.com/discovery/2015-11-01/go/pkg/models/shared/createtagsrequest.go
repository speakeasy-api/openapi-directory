package shared

type CreateTagsRequest struct {
	ConfigurationIds []string               `json:"configurationIds"`
	Tags             map[string]interface{} `json:"tags"`
}
