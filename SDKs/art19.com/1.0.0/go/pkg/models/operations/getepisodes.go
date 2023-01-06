package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetEpisodesSortEnum string

const (
	GetEpisodesSortEnumCreatedAt           GetEpisodesSortEnum = "created_at"
	GetEpisodesSortEnumEarliestReleasedAt  GetEpisodesSortEnum = "earliest_released_at"
	GetEpisodesSortEnumReleasedAt          GetEpisodesSortEnum = "released_at"
	GetEpisodesSortEnumReleasedOrCreatedAt GetEpisodesSortEnum = "released_or_created_at"
	GetEpisodesSortEnumSortTitle           GetEpisodesSortEnum = "sort_title"
	GetEpisodesSortEnumTitle               GetEpisodesSortEnum = "title"
	GetEpisodesSortEnumUpdatedAt           GetEpisodesSortEnum = "updated_at"
)

type GetEpisodesQueryParams struct {
	Ids                         []string              `queryParam:"style=form,explode=true,name=ids[]"`
	IncludedInInventoryCalendar *string               `queryParam:"style=form,explode=true,name=included_in_inventory_calendar"`
	Month                       *string               `queryParam:"style=form,explode=true,name=month"`
	PageNumber                  int64                 `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize                    int64                 `queryParam:"style=form,explode=true,name=page[size]"`
	Published                   *bool                 `queryParam:"style=form,explode=true,name=published"`
	Q                           *string               `queryParam:"style=form,explode=true,name=q"`
	ReleasedAfter               *time.Time            `queryParam:"style=form,explode=true,name=released_after"`
	ReleasedBefore              *time.Time            `queryParam:"style=form,explode=true,name=released_before"`
	Rss                         *bool                 `queryParam:"style=form,explode=true,name=rss"`
	SeasonID                    *string               `queryParam:"style=form,explode=true,name=season_id"`
	SeriesID                    *string               `queryParam:"style=form,explode=true,name=series_id"`
	Sort                        []GetEpisodesSortEnum `queryParam:"style=form,explode=false,name=sort"`
	Year                        *string               `queryParam:"style=form,explode=true,name=year"`
}

type GetEpisodes200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Episode `json:"data,omitempty"`
	Links *shared.Links    `json:"links,omitempty"`
}

// GetEpisodes400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetEpisodes400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetEpisodes400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                              `json:"code,omitempty"`
	Detail *string                                              `json:"detail,omitempty"`
	Source *GetEpisodes400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                              `json:"status,omitempty"`
	Title  *string                                              `json:"title,omitempty"`
}

type GetEpisodes400ApplicationVndAPIPlusJSON struct {
	Errors []GetEpisodes400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetEpisodesRequest struct {
	QueryParams GetEpisodesQueryParams
}

type GetEpisodesResponse struct {
	ContentType                                   string
	Headers                                       map[string][]string
	StatusCode                                    int64
	GetEpisodes200ApplicationVndAPIPlusJSONObject *GetEpisodes200ApplicationVndAPIPlusJSON
	GetEpisodes400ApplicationVndAPIPlusJSONObject *GetEpisodes400ApplicationVndAPIPlusJSON
}
