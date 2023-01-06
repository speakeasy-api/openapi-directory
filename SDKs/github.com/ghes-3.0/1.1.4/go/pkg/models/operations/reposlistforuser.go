package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ReposListForUserQueryParams struct {
	Direction *shared.UsernameEnum4 `queryParam:"style=form,explode=true,name=direction"`
	Page      *int64                `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *shared.UsernameEnum3 `queryParam:"style=form,explode=true,name=sort"`
	Type      *shared.UsernameEnum2 `queryParam:"style=form,explode=true,name=type"`
}

type ReposListForUserRequest struct {
	PathParams  ReposListForUserPathParams
	QueryParams ReposListForUserQueryParams
}

type ReposListForUserResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	MinimalRepositories []shared.MinimalRepository
}
