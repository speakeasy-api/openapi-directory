package operations

import (
	"openapi/pkg/models/shared"
)

type SortOptionsResponse struct {
	ContentType        string
	SortOptionResponse *shared.SortOptionResponse
	StatusCode         int64
}
