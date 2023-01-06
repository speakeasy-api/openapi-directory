package operations

import (
	"openapi/pkg/models/shared"
)

type AddWebhookHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type AddWebhookAddWebhookRequestBodyResponseVersionEnum string

const (
	AddWebhookAddWebhookRequestBodyResponseVersionEnumV1 AddWebhookAddWebhookRequestBodyResponseVersionEnum = "v1"
	AddWebhookAddWebhookRequestBodyResponseVersionEnumV2 AddWebhookAddWebhookRequestBodyResponseVersionEnum = "v2"
)

type AddWebhookAddWebhookRequestBody struct {
	EndpointURL     string                                              `json:"endpointUrl"`
	Resource        *string                                             `json:"resource,omitempty"`
	ResponseVersion *AddWebhookAddWebhookRequestBodyResponseVersionEnum `json:"responseVersion,omitempty"`
	Triggers        *shared.WebhookTriggers                             `json:"triggers,omitempty"`
}

type AddWebhookRequest struct {
	Headers AddWebhookHeaders
	Request *AddWebhookAddWebhookRequestBody `request:"mediaType=application/json"`
}

type AddWebhookResponse struct {
	ContentType     string
	StatusCode      int64
	WebhookResponse *shared.WebhookResponse
}
