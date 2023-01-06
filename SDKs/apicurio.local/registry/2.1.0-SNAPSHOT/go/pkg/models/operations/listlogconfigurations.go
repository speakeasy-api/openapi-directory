package operations

import (
	"openapi/pkg/models/shared"
)

type ListLogConfigurationsResponse struct {
	ContentType            string
	Error                  *shared.Error
	NamedLogConfigurations []shared.NamedLogConfiguration
	StatusCode             int64
}
