package operations

type DeleteSSHKeyPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSSHKeyHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type DeleteSSHKeyRequest struct {
	PathParams DeleteSSHKeyPathParams
	Headers    DeleteSSHKeyHeaders
}

type DeleteSSHKeyResponse struct {
	ContentType string
	StatusCode  int64
}
