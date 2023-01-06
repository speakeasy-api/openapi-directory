package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatsQueryParams struct {
	Direction *shared.FilterDirectionEnum  `queryParam:"style=form,explode=true,name=direction"`
	End       *string                      `queryParam:"style=form,explode=true,name=end"`
	Format    *shared.ResponseFormatEnum   `queryParam:"style=form,explode=true,name=format"`
	Limit     *int64                       `queryParam:"style=form,explode=true,name=limit"`
	Start     *string                      `queryParam:"style=form,explode=true,name=start"`
	Unit      *shared.FilterDirectionEnum1 `queryParam:"style=form,explode=true,name=unit"`
}

type GetStatsHeaders struct {
	XAblyVersion *string `header:"style=simple,explode=false,name=X-Ably-Version"`
}

type GetStatsRequest struct {
	QueryParams GetStatsQueryParams
	Headers     GetStatsHeaders
}

type GetStatsResponse struct {
	Body                             []byte
	ContentType                      string
	Error                            *shared.Error
	StatusCode                       int64
	GetStats2XXApplicationJSONObject map[string]interface{}
}
