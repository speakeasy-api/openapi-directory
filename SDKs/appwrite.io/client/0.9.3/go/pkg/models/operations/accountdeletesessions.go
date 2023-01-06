package operations

import (
	"openapi/pkg/models/shared"
)

type AccountDeleteSessionsSecurity struct {
	JWT     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountDeleteSessionsRequest struct {
	Security AccountDeleteSessionsSecurity
}

type AccountDeleteSessionsResponse struct {
	ContentType string
	StatusCode  int64
}
