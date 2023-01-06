package operations

import (
	"openapi/pkg/models/shared"
)

type SetLogConfigurationPathParams struct {
	Logger string `pathParam:"style=simple,explode=false,name=logger"`
}

type SetLogConfigurationRequest struct {
	PathParams SetLogConfigurationPathParams
	Request    shared.LogConfiguration `request:"mediaType=application/json"`
}

type SetLogConfigurationResponse struct {
	ContentType           string
	Error                 *shared.Error
	NamedLogConfiguration *shared.NamedLogConfiguration
	StatusCode            int64
}
