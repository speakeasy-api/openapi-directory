package operations

import (
	"openapi/pkg/models/shared"
)

type GetSavedFilterPathParams struct {
	Identifier  string `pathParam:"style=simple,explode=false,name=identifier"`
	ProjectSlug string `pathParam:"style=simple,explode=false,name=project_slug"`
	Username    string `pathParam:"style=simple,explode=false,name=username"`
}

type GetSavedFilterRequest struct {
	PathParams GetSavedFilterPathParams
}

type GetSavedFilterResponse struct {
	ContentType        string
	DefaultPayload     *shared.DefaultPayload
	ProjectSavedFilter *shared.ProjectSavedFilter
	StatusCode         int64
}
