package operations

import (
	"openapi/pkg/models/shared"
)

type ListArtifactRulesPathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	GroupID    string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ListArtifactRulesRequest struct {
	PathParams ListArtifactRulesPathParams
}

type ListArtifactRulesResponse struct {
	ContentType string
	Error       *shared.Error
	RuleTypes   []shared.RuleTypeEnum
	StatusCode  int64
}
