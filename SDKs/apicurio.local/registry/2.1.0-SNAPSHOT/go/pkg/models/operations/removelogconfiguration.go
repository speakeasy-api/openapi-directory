package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveLogConfigurationPathParams struct {
	Logger string `pathParam:"style=simple,explode=false,name=logger"`
}

type RemoveLogConfigurationRequest struct {
	PathParams RemoveLogConfigurationPathParams
}

type RemoveLogConfigurationResponse struct {
	ContentType           string
	Error                 *shared.Error
	NamedLogConfiguration *shared.NamedLogConfiguration
	StatusCode            int64
}
