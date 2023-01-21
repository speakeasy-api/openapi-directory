package callbacks

import (
	"openapi/pkg/models/shared"
)

type NotificationPostRequest struct {
	Request shared.AppPkgNotification `request:"mediaType=application/json"`
}

type NotificationPostResponse struct {
	ContentType string
	StatusCode  int64
}
