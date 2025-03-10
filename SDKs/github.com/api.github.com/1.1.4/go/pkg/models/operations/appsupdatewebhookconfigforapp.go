// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type AppsUpdateWebhookConfigForAppRequestBody struct {
	// The media type used to serialize the payloads. Supported values include `json` and `form`. The default is `form`.
	ContentType *string                          `json:"content_type,omitempty"`
	InsecureSsl *shared.WebhookConfigInsecureSsl `json:"insecure_ssl,omitempty"`
	// If provided, the `secret` will be used as the `key` to generate the HMAC hex digest value for [delivery signature headers](https://docs.github.com/webhooks/event-payloads/#delivery-headers).
	Secret *string `json:"secret,omitempty"`
	// The URL to which the payloads will be delivered.
	URL *string `json:"url,omitempty"`
}

type AppsUpdateWebhookConfigForAppResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	WebhookConfig *shared.WebhookConfig
}
