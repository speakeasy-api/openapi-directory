package operations

import (
	"openapi/pkg/models/shared"
)

type AreaRequestBody struct {
	Antenna     *shared.Antenna     `json:"antenna,omitempty"`
	Environment *shared.Environment `json:"environment,omitempty"`
	Model       *shared.Model       `json:"model,omitempty"`
	Network     *string             `json:"network,omitempty"`
	Output      *shared.Output      `json:"output,omitempty"`
	Receiver    *shared.Receiver    `json:"receiver,omitempty"`
	Site        *string             `json:"site,omitempty"`
	Transmitter *shared.Transmitter `json:"transmitter,omitempty"`
}

type AreaSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type AreaRequest struct {
	Request  AreaRequestBody `request:"mediaType=application/json"`
	Security AreaSecurity
}

type AreaResponse struct {
	ContentType string
	StatusCode  int64
}
