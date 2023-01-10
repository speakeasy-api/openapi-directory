package shared

// DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute
// The resulting set of tag keys.
type DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute struct {
	IncludeAllTagsOfInstance map[string]interface{}
	InstanceTagKeys          map[string]interface{}
}

type DeregisterInstanceEventNotificationAttributesResult struct {
	InstanceTagAttribute *DeregisterInstanceEventNotificationAttributesResultInstanceTagAttribute
}
