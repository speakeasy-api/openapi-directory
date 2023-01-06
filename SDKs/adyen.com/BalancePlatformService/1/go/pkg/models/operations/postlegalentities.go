package operations

import (
	"openapi/pkg/models/shared"
)

type PostLegalEntitiesSecurity struct {
	BasicAuth  *shared.SchemeBasicAuth  `security:"scheme,type=http,subtype=basic"`
	APIKeyAuth *shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=header"`
}

type PostLegalEntitiesRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security PostLegalEntitiesSecurity
}

type PostLegalEntitiesResponse struct {
	ContentType  string
	LegalEntity  *interface{}
	ServiceError *interface{}
	StatusCode   int64
}
