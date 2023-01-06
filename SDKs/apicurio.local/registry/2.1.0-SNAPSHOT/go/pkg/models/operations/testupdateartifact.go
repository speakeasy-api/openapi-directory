package operations

import (
	"openapi/pkg/models/shared"
)

type TestUpdateArtifactPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type TestUpdateArtifactRequest struct {
	PathParams TestUpdateArtifactPathParams
	Request    []byte `request:"mediaType=*/*"`
}

type TestUpdateArtifactResponse struct {
	ContentType        string
	Error              *shared.Error
	RuleViolationError *shared.RuleViolationError
	StatusCode         int64
}
