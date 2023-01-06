package operations

import (
	"openapi/pkg/models/shared"
)

type UsersGetContextForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UsersGetContextForUserQueryParams struct {
	SubjectID   *string              `queryParam:"style=form,explode=true,name=subject_id"`
	SubjectType *shared.UsernameEnum `queryParam:"style=form,explode=true,name=subject_type"`
}

type UsersGetContextForUserRequest struct {
	PathParams  UsersGetContextForUserPathParams
	QueryParams UsersGetContextForUserQueryParams
}

type UsersGetContextForUserResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	Hovercard       *shared.Hovercard
	ValidationError *shared.ValidationError
}
