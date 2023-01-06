package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectDetailsPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectDetailsRequest struct {
	PathParams ProjectDetailsPathParams
}

type ProjectDetailsResponse struct {
	ContentType     string
	ProjectComplete *shared.ProjectComplete
	StatusCode      int64
}
