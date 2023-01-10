package shared

// RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute
// The resulting set of tag keys.
type RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute struct {
	IncludeAllTagsOfInstance map[string]interface{}
	InstanceTagKeys          map[string]interface{}
}

type RegisterInstanceEventNotificationAttributesResult struct {
	InstanceTagAttribute *RegisterInstanceEventNotificationAttributesResultInstanceTagAttribute
}
