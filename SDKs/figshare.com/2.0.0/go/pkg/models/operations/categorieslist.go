package operations

import (
	"openapi/pkg/models/shared"
)

type CategoriesListResponse struct {
	Categories  []shared.Category
	ContentType string
	StatusCode  int64
}
