package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogsPathParams struct {
	AppID         string `pathParam:"style=simple,explode=false,name=app_id"`
	ComponentName string `pathParam:"style=simple,explode=false,name=component_name"`
	DeploymentID  string `pathParam:"style=simple,explode=false,name=deployment_id"`
}

type GetLogsQueryParams struct {
	Follow               *bool                                                                   `queryParam:"style=form,explode=true,name=follow"`
	PodConnectionTimeout *string                                                                 `queryParam:"style=form,explode=true,name=pod_connection_timeout"`
	Type                 shared.Onev21apps1Percent7BappIDPercent7D1deploymentsGetParameters0Enum `queryParam:"style=form,explode=true,name=type"`
}

type GetLogs200ApplicationJSON struct {
	HistoricUrls []string `json:"historic_urls,omitempty"`
	LiveURL      *string  `json:"live_url,omitempty"`
}

type GetLogs401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetLogsRequest struct {
	PathParams  GetLogsPathParams
	QueryParams GetLogsQueryParams
}

type GetLogsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetLogs200ApplicationJSONObject                           *GetLogs200ApplicationJSON
	GetLogs401ApplicationJSONObject                           *GetLogs401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
