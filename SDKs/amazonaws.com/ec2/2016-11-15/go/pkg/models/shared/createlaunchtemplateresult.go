package shared

// CreateLaunchTemplateResultLaunchTemplate
// Information about the launch template.
type CreateLaunchTemplateResultLaunchTemplate struct {
	CreateTime           map[string]interface{}
	CreatedBy            map[string]interface{}
	DefaultVersionNumber map[string]interface{}
	LatestVersionNumber  map[string]interface{}
	LaunchTemplateID     map[string]interface{}
	LaunchTemplateName   map[string]interface{}
	Tags                 map[string]interface{}
}

// CreateLaunchTemplateResultWarning
// If the launch template contains parameters or parameter combinations that are not valid, an error code and an error message are returned for each issue that's found.
type CreateLaunchTemplateResultWarning struct {
	Errors map[string]interface{}
}

type CreateLaunchTemplateResult struct {
	LaunchTemplate *CreateLaunchTemplateResultLaunchTemplate
	Warning        *CreateLaunchTemplateResultWarning
}
