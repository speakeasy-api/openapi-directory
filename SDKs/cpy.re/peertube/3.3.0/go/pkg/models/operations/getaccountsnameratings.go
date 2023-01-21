package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsNameRatingsPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetAccountsNameRatingsQueryParams struct {
	Count  *int64           `queryParam:"style=form,explode=true,name=count"`
	Rating *shared.SortEnum `queryParam:"style=form,explode=true,name=rating"`
	Sort   *string          `queryParam:"style=form,explode=true,name=sort"`
	Start  *int64           `queryParam:"style=form,explode=true,name=start"`
}

type GetAccountsNameRatingsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAccountsNameRatingsRequest struct {
	PathParams  GetAccountsNameRatingsPathParams
	QueryParams GetAccountsNameRatingsQueryParams
	Security    GetAccountsNameRatingsSecurity
}

type GetAccountsNameRatingsResponse struct {
	ContentType  string
	StatusCode   int64
	VideoRatings []interface{}
}
