package operations

import (
	"openapi/pkg/models/shared"
)

type LicensesListResponse struct {
	ContentType string
	Licenses    []shared.License
	StatusCode  int64
}
