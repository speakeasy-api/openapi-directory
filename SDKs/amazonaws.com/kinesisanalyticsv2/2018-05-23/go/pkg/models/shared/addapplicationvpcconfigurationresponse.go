package shared

type AddApplicationVpcConfigurationResponse struct {
	ApplicationARN              *string                      `json:"ApplicationARN,omitempty"`
	ApplicationVersionID        *int64                       `json:"ApplicationVersionId,omitempty"`
	VpcConfigurationDescription *VpcConfigurationDescription `json:"VpcConfigurationDescription,omitempty"`
}
