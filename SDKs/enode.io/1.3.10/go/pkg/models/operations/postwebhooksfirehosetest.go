package operations

import (
	"openapi/pkg/models/shared"
)

type PostWebhooksFirehoseTestSecurity struct {
	ClientAccessToken shared.SchemeClientAccessToken `security:"scheme,type=oauth2"`
}

type PostWebhooksFirehoseTestRequest struct {
	Security PostWebhooksFirehoseTestSecurity
}

type PostWebhooksFirehoseTestResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	PostWebhooksFirehoseTestDefaultApplicationJSONString *string
}
