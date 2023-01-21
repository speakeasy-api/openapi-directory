package operations

import (
	"openapi/pkg/models/shared"
)

type GetServerFollowingQueryParams struct {
	ActorType *shared.ActorTypeEnum   `queryParam:"style=form,explode=true,name=actorType"`
	Count     *int64                  `queryParam:"style=form,explode=true,name=count"`
	Sort      *string                 `queryParam:"style=form,explode=true,name=sort"`
	Start     *int64                  `queryParam:"style=form,explode=true,name=start"`
	State     *shared.FollowStateEnum `queryParam:"style=form,explode=true,name=state"`
}

type GetServerFollowing200ApplicationJSON struct {
	Data  []interface{} `json:"data,omitempty"`
	Total *int64        `json:"total,omitempty"`
}

type GetServerFollowingRequest struct {
	QueryParams GetServerFollowingQueryParams
}

type GetServerFollowingResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetServerFollowing200ApplicationJSONObject *GetServerFollowing200ApplicationJSON
}
