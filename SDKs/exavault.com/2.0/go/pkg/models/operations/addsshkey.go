package operations

import (
	"openapi/pkg/models/shared"
)

type AddSSHKeyHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type AddSSHKeyAddSSHKeyRequestBody struct {
	PublicKey string `json:"publicKey"`
	UserID    int64  `json:"userId"`
}

type AddSSHKeyRequest struct {
	Headers AddSSHKeyHeaders
	Request *AddSSHKeyAddSSHKeyRequestBody `request:"mediaType=application/json"`
}

type AddSSHKeyResponse struct {
	ContentType    string
	SSHKeyResponse *shared.SSHKeyResponse
	StatusCode     int64
}
