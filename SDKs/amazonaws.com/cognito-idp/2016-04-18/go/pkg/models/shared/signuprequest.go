package shared

// SignUpRequestAnalyticsMetadata
// <p>An Amazon Pinpoint analytics endpoint.</p> <p>An endpoint uniquely identifies a mobile device, email address, or phone number that can receive messages from Amazon Pinpoint analytics.</p> <note> <p>Cognito User Pools only supports sending events to Amazon Pinpoint projects in the US East (N. Virginia) us-east-1 Region, regardless of the region in which the user pool resides.</p> </note>
type SignUpRequestAnalyticsMetadata struct {
	AnalyticsEndpointID *string `json:"AnalyticsEndpointId,omitempty"`
}

// SignUpRequest
// Represents the request to register a user.
type SignUpRequest struct {
	AnalyticsMetadata *SignUpRequestAnalyticsMetadata `json:"AnalyticsMetadata,omitempty"`
	ClientID          string                          `json:"ClientId"`
	ClientMetadata    map[string]string               `json:"ClientMetadata,omitempty"`
	Password          string                          `json:"Password"`
	SecretHash        *string                         `json:"SecretHash,omitempty"`
	UserAttributes    []AttributeType                 `json:"UserAttributes,omitempty"`
	UserContextData   *UserContextDataType            `json:"UserContextData,omitempty"`
	Username          string                          `json:"Username"`
	ValidationData    []AttributeType                 `json:"ValidationData,omitempty"`
}
