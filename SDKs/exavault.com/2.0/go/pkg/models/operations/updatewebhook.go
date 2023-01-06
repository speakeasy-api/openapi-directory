package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWebhookPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateWebhookHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum string

const (
	UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnumV2 UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum = "v2"
	UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnumV1 UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum = "v1"
)

type UpdateWebhookUpdateWebhookRequestBody struct {
	EndpointURL     *string                                                   `json:"endpointUrl,omitempty"`
	Resource        *string                                                   `json:"resource,omitempty"`
	ResponseVersion *UpdateWebhookUpdateWebhookRequestBodyResponseVersionEnum `json:"responseVersion,omitempty"`
	Triggers        *shared.WebhookTriggers                                   `json:"triggers,omitempty"`
}

type UpdateWebhookRequest struct {
	PathParams UpdateWebhookPathParams
	Headers    UpdateWebhookHeaders
	Request    *UpdateWebhookUpdateWebhookRequestBody `request:"mediaType=application/json"`
}

type UpdateWebhookResponse struct {
	ContentType     string
	StatusCode      int64
	WebhookResponse *shared.WebhookResponse
}
