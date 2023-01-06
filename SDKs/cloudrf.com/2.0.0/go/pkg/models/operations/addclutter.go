package operations

import (
	"openapi/pkg/models/shared"
)

type AddClutterRequestBody struct {
	Features []shared.Feature `json:"features,omitempty"`
	Name     *string          `json:"name,omitempty"`
	Type     *string          `json:"type,omitempty"`
}

type AddClutterSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type AddClutterRequest struct {
	Request  AddClutterRequestBody `request:"mediaType=application/json"`
	Security AddClutterSecurity
}

type AddClutterResponse struct {
	ContentType string
	StatusCode  int64
}
