package operations

import (
	"openapi/pkg/models/shared"
)

type ListCollectionsDirectionEnum string

const (
	ListCollectionsDirectionEnumAsc  ListCollectionsDirectionEnum = "asc"
	ListCollectionsDirectionEnumDesc ListCollectionsDirectionEnum = "desc"
)

type ListCollectionsSortEnum string

const (
	ListCollectionsSortEnumCreationDate ListCollectionsSortEnum = "creationDate"
	ListCollectionsSortEnumTitle        ListCollectionsSortEnum = "title"
)

type ListCollectionsQueryParams struct {
	Direction *ListCollectionsDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Limit     *int64                        `queryParam:"style=form,explode=true,name=limit"`
	Next      *string                       `queryParam:"style=form,explode=true,name=next"`
	Parent    *string                       `queryParam:"style=form,explode=true,name=parent"`
	Previous  *string                       `queryParam:"style=form,explode=true,name=previous"`
	Sort      *ListCollectionsSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type ListCollectionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type ListCollectionsRequest struct {
	QueryParams ListCollectionsQueryParams
	Security    ListCollectionsSecurity
}

type ListCollectionsResponse struct {
	Collections       []shared.Collection
	ContentType       string
	FlatErrorResponse *shared.FlatErrorResponse
	StatusCode        int64
}
