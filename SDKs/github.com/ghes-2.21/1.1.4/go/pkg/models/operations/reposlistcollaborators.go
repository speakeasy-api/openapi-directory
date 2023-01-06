package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListCollaboratorsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListCollaboratorsQueryParams struct {
	Affiliation *shared.RepoEnum `queryParam:"style=form,explode=true,name=affiliation"`
	Page        *int64           `queryParam:"style=form,explode=true,name=page"`
	PerPage     *int64           `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListCollaboratorsRequest struct {
	PathParams  ReposListCollaboratorsPathParams
	QueryParams ReposListCollaboratorsQueryParams
}

type ReposListCollaboratorsResponse struct {
	ContentType   string
	Headers       map[string][]string
	StatusCode    int64
	BasicError    *shared.BasicError
	Collaborators []shared.Collaborator
}
