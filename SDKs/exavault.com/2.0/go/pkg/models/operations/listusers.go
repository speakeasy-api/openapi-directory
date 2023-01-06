package operations

import (
	"openapi/pkg/models/shared"
)

type ListUsersQueryParams struct {
	Email        *string `queryParam:"style=form,explode=true,name=email"`
	HomeResource *string `queryParam:"style=form,explode=true,name=homeResource"`
	Include      *string `queryParam:"style=form,explode=true,name=include"`
	Limit        *int32  `queryParam:"style=form,explode=true,name=limit"`
	Nickname     *string `queryParam:"style=form,explode=true,name=nickname"`
	Offset       *int32  `queryParam:"style=form,explode=true,name=offset"`
	Role         *string `queryParam:"style=form,explode=true,name=role"`
	Search       *string `queryParam:"style=form,explode=true,name=search"`
	Sort         *string `queryParam:"style=form,explode=true,name=sort"`
	Status       *int64  `queryParam:"style=form,explode=true,name=status"`
	Username     *string `queryParam:"style=form,explode=true,name=username"`
}

type ListUsersHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type ListUsersRequest struct {
	QueryParams ListUsersQueryParams
	Headers     ListUsersHeaders
}

type ListUsersResponse struct {
	ContentType            string
	StatusCode             int64
	UserCollectionResponse *shared.UserCollectionResponse
}
