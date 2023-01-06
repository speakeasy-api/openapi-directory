package shared

type DeleteLaunchTemplateVersionsResult struct {
	SuccessfullyDeletedLaunchTemplateVersions   map[string]interface{}
	UnsuccessfullyDeletedLaunchTemplateVersions map[string]interface{}
}
