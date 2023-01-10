package shared

// DeleteLaunchTemplateResultLaunchTemplate
// Information about the launch template.
type DeleteLaunchTemplateResultLaunchTemplate struct {
	CreateTime           map[string]interface{}
	CreatedBy            map[string]interface{}
	DefaultVersionNumber map[string]interface{}
	LatestVersionNumber  map[string]interface{}
	LaunchTemplateID     map[string]interface{}
	LaunchTemplateName   map[string]interface{}
	Tags                 map[string]interface{}
}

type DeleteLaunchTemplateResult struct {
	LaunchTemplate *DeleteLaunchTemplateResultLaunchTemplate
}
