package operations

import (
	"openapi/pkg/models/shared"
)

type GetLogConfigurationPathParams struct {
	Logger string `pathParam:"style=simple,explode=false,name=logger"`
}

type GetLogConfigurationRequest struct {
	PathParams GetLogConfigurationPathParams
}

type GetLogConfigurationResponse struct {
	ContentType           string
	Error                 *shared.Error
	NamedLogConfiguration *shared.NamedLogConfiguration
	StatusCode            int64
}
