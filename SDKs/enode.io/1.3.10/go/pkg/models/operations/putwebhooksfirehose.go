package operations

import (
	"openapi/pkg/models/shared"
)

type PutWebhooksFirehoseRequestBody struct {
	Secret *string `json:"secret,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type PutWebhooksFirehoseSecurity struct {
	ClientAccessToken shared.SchemeClientAccessToken `security:"scheme,type=oauth2"`
}

type PutWebhooksFirehoseRequest struct {
	Request  *PutWebhooksFirehoseRequestBody `request:"mediaType=application/json"`
	Security PutWebhooksFirehoseSecurity
}

type PutWebhooksFirehoseResponse struct {
	ContentType string
	StatusCode  int64
}
