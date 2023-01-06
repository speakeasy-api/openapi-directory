package operations

import (
	"openapi/pkg/models/shared"
)

type GetSeriesSortEnum string

const (
	GetSeriesSortEnumCreatedAt         GetSeriesSortEnum = "created_at"
	GetSeriesSortEnumEpisodeReleasedAt GetSeriesSortEnum = "episode_released_at"
	GetSeriesSortEnumSortTitle         GetSeriesSortEnum = "sort_title"
	GetSeriesSortEnumTitle             GetSeriesSortEnum = "title"
	GetSeriesSortEnumUpdatedAt         GetSeriesSortEnum = "updated_at"
)

type GetSeriesQueryParams struct {
	AdRepAccountID *string             `queryParam:"style=form,explode=true,name=ad_rep_account_id"`
	Ids            []string            `queryParam:"style=form,explode=true,name=ids[]"`
	NetworkID      *string             `queryParam:"style=form,explode=true,name=network_id"`
	PageNumber     *int64              `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize       *int64              `queryParam:"style=form,explode=true,name=page[size]"`
	Q              *string             `queryParam:"style=form,explode=true,name=q"`
	Sort           []GetSeriesSortEnum `queryParam:"style=form,explode=false,name=sort"`
}

type GetSeries200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Series `json:"data,omitempty"`
	Links *shared.Links   `json:"links,omitempty"`
}

// GetSeries400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetSeries400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetSeries400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                            `json:"code,omitempty"`
	Detail *string                                            `json:"detail,omitempty"`
	Source *GetSeries400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                            `json:"status,omitempty"`
	Title  *string                                            `json:"title,omitempty"`
}

type GetSeries400ApplicationVndAPIPlusJSON struct {
	Errors []GetSeries400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetSeriesRequest struct {
	QueryParams GetSeriesQueryParams
}

type GetSeriesResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	GetSeries200ApplicationVndAPIPlusJSONObject *GetSeries200ApplicationVndAPIPlusJSON
	GetSeries400ApplicationVndAPIPlusJSONObject *GetSeries400ApplicationVndAPIPlusJSON
}
