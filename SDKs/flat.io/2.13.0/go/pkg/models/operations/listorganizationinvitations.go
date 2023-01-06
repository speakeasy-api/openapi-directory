package operations

import (
	"openapi/pkg/models/shared"
)

type ListOrganizationInvitationsRoleEnum string

const (
	ListOrganizationInvitationsRoleEnumUser    ListOrganizationInvitationsRoleEnum = "user"
	ListOrganizationInvitationsRoleEnumTeacher ListOrganizationInvitationsRoleEnum = "teacher"
	ListOrganizationInvitationsRoleEnumAdmin   ListOrganizationInvitationsRoleEnum = "admin"
)

type ListOrganizationInvitationsQueryParams struct {
	Limit    *int64                               `queryParam:"style=form,explode=true,name=limit"`
	Next     *string                              `queryParam:"style=form,explode=true,name=next"`
	Previous *string                              `queryParam:"style=form,explode=true,name=previous"`
	Role     *ListOrganizationInvitationsRoleEnum `queryParam:"style=form,explode=true,name=role"`
}

type ListOrganizationInvitationsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListOrganizationInvitationsRequest struct {
	QueryParams ListOrganizationInvitationsQueryParams
	Security    ListOrganizationInvitationsSecurity
}

type ListOrganizationInvitationsResponse struct {
	ContentType             string
	FlatErrorResponse       *shared.FlatErrorResponse
	OrganizationInvitations []shared.OrganizationInvitation
	StatusCode              int64
}
