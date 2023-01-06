package operations

import (
	"openapi/pkg/models/shared"
)

type GetSSHKeyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSSHKeyHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type GetSSHKeyRequest struct {
	PathParams GetSSHKeyPathParams
	Headers    GetSSHKeyHeaders
}

type GetSSHKeyResponse struct {
	ContentType    string
	SSHKeyResponse *shared.SSHKeyResponse
	StatusCode     int64
}
