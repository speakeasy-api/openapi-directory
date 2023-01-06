package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsSearchRequest struct {
	Request *shared.ProjectsSearch `request:"mediaType=application/json"`
}

type ProjectsSearchResponse struct {
	ContentType string
	Projects    []shared.Project
	StatusCode  int64
}
