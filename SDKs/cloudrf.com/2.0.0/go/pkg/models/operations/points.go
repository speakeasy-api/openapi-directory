package operations

import (
	"openapi/pkg/models/shared"
)

type PointsRequestBody struct {
	Antenna     *shared.Antenna     `json:"antenna,omitempty"`
	Environment *shared.Environment `json:"environment,omitempty"`
	Model       *shared.Model       `json:"model,omitempty"`
	Network     *string             `json:"network,omitempty"`
	Output      *shared.Output      `json:"output,omitempty"`
	Points      []shared.Point      `json:"points,omitempty"`
	Receiver    *shared.Receiver    `json:"receiver,omitempty"`
	Site        *string             `json:"site,omitempty"`
	Transmitter *shared.Transmitter `json:"transmitter,omitempty"`
}

type PointsSecurity struct {
	APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PointsRequest struct {
	Request  PointsRequestBody `request:"mediaType=application/json"`
	Security PointsSecurity
}

type PointsResponse struct {
	ContentType string
	StatusCode  int64
}
