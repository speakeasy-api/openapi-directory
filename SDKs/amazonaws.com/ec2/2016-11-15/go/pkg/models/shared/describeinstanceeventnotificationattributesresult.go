package shared

// DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute
// Information about the registered tag keys.
type DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute struct {
	IncludeAllTagsOfInstance map[string]interface{}
	InstanceTagKeys          map[string]interface{}
}

type DescribeInstanceEventNotificationAttributesResult struct {
	InstanceTagAttribute *DescribeInstanceEventNotificationAttributesResultInstanceTagAttribute
}
