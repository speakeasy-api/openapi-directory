package operations

import (
	"openapi/pkg/models/shared"
)

type GetSeasonsSortEnum string

const (
	GetSeasonsSortEnumCreatedAt GetSeasonsSortEnum = "created_at"
	GetSeasonsSortEnumSortTitle GetSeasonsSortEnum = "sort_title"
	GetSeasonsSortEnumTitle     GetSeasonsSortEnum = "title"
	GetSeasonsSortEnumUpdatedAt GetSeasonsSortEnum = "updated_at"
)

type GetSeasonsQueryParams struct {
	Ids        []string             `queryParam:"style=form,explode=true,name=ids[]"`
	PageNumber *int64               `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize   *int64               `queryParam:"style=form,explode=true,name=page[size]"`
	Q          *string              `queryParam:"style=form,explode=true,name=q"`
	SeriesID   *string              `queryParam:"style=form,explode=true,name=series_id"`
	Sort       []GetSeasonsSortEnum `queryParam:"style=form,explode=false,name=sort"`
}

type GetSeasons200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Season `json:"data,omitempty"`
	Links *shared.Links   `json:"links,omitempty"`
}

// GetSeasons400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetSeasons400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetSeasons400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                             `json:"code,omitempty"`
	Detail *string                                             `json:"detail,omitempty"`
	Source *GetSeasons400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                             `json:"status,omitempty"`
	Title  *string                                             `json:"title,omitempty"`
}

type GetSeasons400ApplicationVndAPIPlusJSON struct {
	Errors []GetSeasons400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetSeasonsRequest struct {
	QueryParams GetSeasonsQueryParams
}

type GetSeasonsResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	StatusCode                                   int64
	GetSeasons200ApplicationVndAPIPlusJSONObject *GetSeasons200ApplicationVndAPIPlusJSON
	GetSeasons400ApplicationVndAPIPlusJSONObject *GetSeasons400ApplicationVndAPIPlusJSON
}
