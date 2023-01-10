package shared

// CreateVpcEndpointConnectionNotificationResultConnectionNotification
// Information about the notification.
type CreateVpcEndpointConnectionNotificationResultConnectionNotification struct {
	ConnectionEvents            map[string]interface{}
	ConnectionNotificationArn   map[string]interface{}
	ConnectionNotificationID    map[string]interface{}
	ConnectionNotificationState map[string]interface{}
	ConnectionNotificationType  map[string]interface{}
	ServiceID                   map[string]interface{}
	VpcEndpointID               map[string]interface{}
}

type CreateVpcEndpointConnectionNotificationResult struct {
	ClientToken            map[string]interface{}
	ConnectionNotification *CreateVpcEndpointConnectionNotificationResultConnectionNotification
}
