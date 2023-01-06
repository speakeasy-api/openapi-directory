package operations

import (
	"openapi/pkg/models/shared"
)

type PathRequestBody struct {
	Antenna     *shared.Antenna     `json:"antenna,omitempty"`
	Environment *shared.Environment `json:"environment,omitempty"`
	Model       *shared.Model       `json:"model,omitempty"`
	Network     *string             `json:"network,omitempty"`
	Output      *shared.Output      `json:"output,omitempty"`
	Receiver    *shared.Receiver    `json:"receiver,omitempty"`
	Site        *string             `json:"site,omitempty"`
	Transmitter *shared.Transmitter `json:"transmitter,omitempty"`
}

type PathSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PathRequest struct {
	Request  PathRequestBody `request:"mediaType=application/json"`
	Security PathSecurity
}

type PathResponse struct {
	ContentType string
	StatusCode  int64
}
