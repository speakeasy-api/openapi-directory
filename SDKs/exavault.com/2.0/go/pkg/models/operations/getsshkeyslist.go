package operations

import (
	"openapi/pkg/models/shared"
)

type GetSSHKeysListQueryParams struct {
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64  `queryParam:"style=form,explode=true,name=offset"`
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetSSHKeysListHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetSSHKeysListRequest struct {
	QueryParams GetSSHKeysListQueryParams
	Headers     GetSSHKeysListHeaders
}

type GetSSHKeysListResponse struct {
	ContentType              string
	SSHKeyCollectionResponse *shared.SSHKeyCollectionResponse
	StatusCode               int64
}
