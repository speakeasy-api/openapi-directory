package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetSessionLogsQueryParams struct {
	EndDate   *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	IPAddress *string    `queryParam:"style=form,explode=true,name=ipAddress"`
	Limit     *int64     `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int64     `queryParam:"style=form,explode=true,name=offset"`
	Path      *string    `queryParam:"style=form,explode=true,name=path"`
	Sort      *string    `queryParam:"style=form,explode=true,name=sort"`
	StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
	Type      *string    `queryParam:"style=form,explode=true,name=type"`
	Username  *string    `queryParam:"style=form,explode=true,name=username"`
}

type GetSessionLogsHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetSessionLogsRequest struct {
	QueryParams GetSessionLogsQueryParams
	Headers     GetSessionLogsHeaders
}

type GetSessionLogsResponse struct {
	ContentType             string
	SessionActivityResponse *shared.SessionActivityResponse
	StatusCode              int64
}
