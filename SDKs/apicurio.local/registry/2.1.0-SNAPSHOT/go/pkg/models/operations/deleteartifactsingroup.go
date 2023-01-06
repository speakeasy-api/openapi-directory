package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteArtifactsInGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type DeleteArtifactsInGroupRequest struct {
	PathParams DeleteArtifactsInGroupPathParams
}

type DeleteArtifactsInGroupResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
