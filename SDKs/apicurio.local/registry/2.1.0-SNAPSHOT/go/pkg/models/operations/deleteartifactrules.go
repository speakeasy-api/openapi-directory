package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteArtifactRulesPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type DeleteArtifactRulesRequest struct {
	PathParams DeleteArtifactRulesPathParams
}

type DeleteArtifactRulesResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
