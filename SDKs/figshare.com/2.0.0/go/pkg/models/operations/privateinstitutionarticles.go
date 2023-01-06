package operations

import (
	"openapi/pkg/models/shared"
)

type PrivateInstitutionArticlesOrderEnum string

const (
	PrivateInstitutionArticlesOrderEnumPublishedDate PrivateInstitutionArticlesOrderEnum = "published_date"
	PrivateInstitutionArticlesOrderEnumModifiedDate  PrivateInstitutionArticlesOrderEnum = "modified_date"
	PrivateInstitutionArticlesOrderEnumViews         PrivateInstitutionArticlesOrderEnum = "views"
	PrivateInstitutionArticlesOrderEnumShares        PrivateInstitutionArticlesOrderEnum = "shares"
	PrivateInstitutionArticlesOrderEnumDownloads     PrivateInstitutionArticlesOrderEnum = "downloads"
	PrivateInstitutionArticlesOrderEnumCites         PrivateInstitutionArticlesOrderEnum = "cites"
)

type PrivateInstitutionArticlesOrderDirectionEnum string

const (
	PrivateInstitutionArticlesOrderDirectionEnumAsc  PrivateInstitutionArticlesOrderDirectionEnum = "asc"
	PrivateInstitutionArticlesOrderDirectionEnumDesc PrivateInstitutionArticlesOrderDirectionEnum = "desc"
)

type PrivateInstitutionArticlesQueryParams struct {
	ItemType       *int64                                        `queryParam:"style=form,explode=true,name=item_type"`
	Limit          *int64                                        `queryParam:"style=form,explode=true,name=limit"`
	ModifiedSince  *string                                       `queryParam:"style=form,explode=true,name=modified_since"`
	Offset         *int64                                        `queryParam:"style=form,explode=true,name=offset"`
	Order          *PrivateInstitutionArticlesOrderEnum          `queryParam:"style=form,explode=true,name=order"`
	OrderDirection *PrivateInstitutionArticlesOrderDirectionEnum `queryParam:"style=form,explode=true,name=order_direction"`
	Page           *int64                                        `queryParam:"style=form,explode=true,name=page"`
	PageSize       *int64                                        `queryParam:"style=form,explode=true,name=page_size"`
	PublishedSince *string                                       `queryParam:"style=form,explode=true,name=published_since"`
	ResourceDoi    *string                                       `queryParam:"style=form,explode=true,name=resource_doi"`
	Status         *int64                                        `queryParam:"style=form,explode=true,name=status"`
}

type PrivateInstitutionArticlesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PrivateInstitutionArticlesRequest struct {
	QueryParams PrivateInstitutionArticlesQueryParams
	Security    PrivateInstitutionArticlesSecurity
}

type PrivateInstitutionArticlesResponse struct {
	Articles     []shared.Article
	ContentType  string
	ErrorMessage *shared.ErrorMessage
	StatusCode   int64
}
