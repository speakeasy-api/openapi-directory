package operations

import (
	"time"
)

type KeyRetrievePathParams struct {
	PK string `pathParam:"style=simple,explode=false,name=PK"`
}

type KeyRetrieveJwt struct {
	Since  *time.Time `json:"since,omitempty"`
	Status *string    `json:"status,omitempty"`
	Sub    *string    `json:"sub,omitempty"`
}

type KeyRetrieveRequest struct {
	PathParams KeyRetrievePathParams
}

type KeyRetrieveResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	JWT         *KeyRetrieveJwt
	StatusCode  int64
}
