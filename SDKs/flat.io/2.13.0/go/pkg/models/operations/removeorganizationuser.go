package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveOrganizationUserPathParams struct {
	User string `pathParam:"style=simple,explode=false,name=user"`
}

type RemoveOrganizationUserQueryParams struct {
	ConvertToIndividual *bool `queryParam:"style=form,explode=true,name=convertToIndividual"`
}

type RemoveOrganizationUserSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type RemoveOrganizationUserRequest struct {
	PathParams  RemoveOrganizationUserPathParams
	QueryParams RemoveOrganizationUserQueryParams
	Security    RemoveOrganizationUserSecurity
}

type RemoveOrganizationUserResponse struct {
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
