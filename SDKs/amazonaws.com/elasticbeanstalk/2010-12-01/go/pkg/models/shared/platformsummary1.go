package shared

// PlatformSummary1
// Summary information about a platform version.
type PlatformSummary1 struct {
	OperatingSystemName          *string
	OperatingSystemVersion       *string
	PlatformArn                  *string
	PlatformBranchLifecycleState *string
	PlatformBranchName           *string
	PlatformCategory             *string
	PlatformLifecycleState       *string
	PlatformOwner                *string
	PlatformStatus               *PlatformStatusEnum
	PlatformVersion              *string
	SupportedAddonList           []string
	SupportedTierList            []string
}
