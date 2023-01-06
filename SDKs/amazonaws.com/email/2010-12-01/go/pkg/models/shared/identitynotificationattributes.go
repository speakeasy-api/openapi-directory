package shared

type IdentityNotificationAttributes struct {
	BounceTopic                            *string
	ComplaintTopic                         *string
	DeliveryTopic                          *string
	ForwardingEnabled                      *bool
	HeadersInBounceNotificationsEnabled    *bool
	HeadersInComplaintNotificationsEnabled *bool
	HeadersInDeliveryNotificationsEnabled  *bool
}
