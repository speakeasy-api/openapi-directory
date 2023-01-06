package operations

import (
	"openapi/pkg/models/shared"
)

type CreateScoreRevisionPathParams struct {
	Score string `pathParam:"style=simple,explode=false,name=score"`
}

type CreateScoreRevisionSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateScoreRevisionRequest struct {
	PathParams CreateScoreRevisionPathParams
	Request    shared.ScoreRevisionCreation `request:"mediaType=application/json"`
	Security   CreateScoreRevisionSecurity
}

type CreateScoreRevisionResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	ScoreRevision     *shared.ScoreRevision
	StatusCode        int64
}
