package operations

import (
	"openapi/pkg/models/shared"
)

type AccountInstitutionCurationsStatusEnum string

const (
	AccountInstitutionCurationsStatusEnumPending  AccountInstitutionCurationsStatusEnum = "pending"
	AccountInstitutionCurationsStatusEnumApproved AccountInstitutionCurationsStatusEnum = "approved"
	AccountInstitutionCurationsStatusEnumRejected AccountInstitutionCurationsStatusEnum = "rejected"
	AccountInstitutionCurationsStatusEnumClosed   AccountInstitutionCurationsStatusEnum = "closed"
)

type AccountInstitutionCurationsQueryParams struct {
	ArticleID *int64                                 `queryParam:"style=form,explode=true,name=article_id"`
	GroupID   *int64                                 `queryParam:"style=form,explode=true,name=group_id"`
	Limit     *int64                                 `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int64                                 `queryParam:"style=form,explode=true,name=offset"`
	Status    *AccountInstitutionCurationsStatusEnum `queryParam:"style=form,explode=true,name=status"`
}

type AccountInstitutionCurationsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AccountInstitutionCurationsRequest struct {
	QueryParams AccountInstitutionCurationsQueryParams
	Security    AccountInstitutionCurationsSecurity
}

type AccountInstitutionCurationsResponse struct {
	ContentType  string
	Curation     *shared.Curation
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
