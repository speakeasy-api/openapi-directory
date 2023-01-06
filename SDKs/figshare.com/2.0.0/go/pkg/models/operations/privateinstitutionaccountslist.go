package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionAccountsListQueryParams struct {
	Email             *string `queryParam:"style=form,explode=true,name=email"`
	InstitutionUserID *string `queryParam:"style=form,explode=true,name=institution_user_id"`
	IsActive          *int64  `queryParam:"style=form,explode=true,name=is_active"`
	Limit             *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset            *int64  `queryParam:"style=form,explode=true,name=offset"`
	Page              *int64  `queryParam:"style=form,explode=true,name=page"`
	PageSize          *int64  `queryParam:"style=form,explode=true,name=page_size"`
}

type PrivateInstitutionAccountsListSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionAccountsListRequest struct {
	QueryParams PrivateInstitutionAccountsListQueryParams
	Security    PrivateInstitutionAccountsListSecurity
}

type PrivateInstitutionAccountsListResponse struct {
	ContentType   string
	ErrorMessage  *shared.ErrorMessage
	ShortAccounts []shared.ShortAccount
	StatusCode    int64
}
