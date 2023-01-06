package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateProjectsSearchRequest struct {
	Request *shared.ProjectsSearch `request:"mediaType=application/json"`
}

type PrivateProjectsSearchResponse struct {
	ContentType     string
	ProjectPrivates []shared.ProjectPrivate
	StatusCode      int64
}
