package shared

// EcsParameters1
// The custom parameters to be used when the target is an Amazon ECS task.
type EcsParameters1 struct {
	CapacityProviderStrategy []CapacityProviderStrategyItem `json:"CapacityProviderStrategy,omitempty"`
	EnableECSManagedTags     *bool                          `json:"EnableECSManagedTags,omitempty"`
	EnableExecuteCommand     *bool                          `json:"EnableExecuteCommand,omitempty"`
	Group                    *string                        `json:"Group,omitempty"`
	LaunchType               *LaunchTypeEnum                `json:"LaunchType,omitempty"`
	NetworkConfiguration     *NetworkConfiguration1         `json:"NetworkConfiguration,omitempty"`
	PlacementConstraints     []PlacementConstraint          `json:"PlacementConstraints,omitempty"`
	PlacementStrategy        []PlacementStrategy            `json:"PlacementStrategy,omitempty"`
	PlatformVersion          *string                        `json:"PlatformVersion,omitempty"`
	PropagateTags            *PropagateTagsEnum             `json:"PropagateTags,omitempty"`
	ReferenceID              *string                        `json:"ReferenceId,omitempty"`
	Tags                     []Tag                          `json:"Tags,omitempty"`
	TaskCount                *int64                         `json:"TaskCount,omitempty"`
	TaskDefinitionArn        string                         `json:"TaskDefinitionArn"`
}
