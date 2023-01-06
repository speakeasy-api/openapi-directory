package shared

type ListCustomPluginsResponse struct {
	CustomPlugins map[string]interface{} `json:"customPlugins,omitempty"`
	NextToken     *string                `json:"nextToken,omitempty"`
}
