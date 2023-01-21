package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type SearchVideosQueryParams struct {
	CategoryOneOf                *interface{}                 `queryParam:"style=form,explode=false,name=categoryOneOf"`
	Count                        *int64                       `queryParam:"style=form,explode=true,name=count"`
	DurationMax                  *int64                       `queryParam:"style=form,explode=true,name=durationMax"`
	DurationMin                  *int64                       `queryParam:"style=form,explode=true,name=durationMin"`
	EndDate                      *time.Time                   `queryParam:"style=form,explode=true,name=endDate"`
	Filter                       *shared.FilterEnum           `queryParam:"style=form,explode=true,name=filter"`
	IsLive                       *bool                        `queryParam:"style=form,explode=true,name=isLive"`
	LanguageOneOf                *interface{}                 `queryParam:"style=form,explode=false,name=languageOneOf"`
	LicenceOneOf                 *interface{}                 `queryParam:"style=form,explode=false,name=licenceOneOf"`
	Nsfw                         *shared.NsfwEnum             `queryParam:"style=form,explode=true,name=nsfw"`
	OriginallyPublishedEndDate   *time.Time                   `queryParam:"style=form,explode=true,name=originallyPublishedEndDate"`
	OriginallyPublishedStartDate *time.Time                   `queryParam:"style=form,explode=true,name=originallyPublishedStartDate"`
	Search                       string                       `queryParam:"style=form,explode=true,name=search"`
	SearchTarget                 *shared.SearchTargetEnum     `queryParam:"style=form,explode=true,name=searchTarget"`
	SkipCount                    *shared.SkipCountEnum        `queryParam:"style=form,explode=true,name=skipCount"`
	Sort                         *shared.VideosSearchSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Start                        *int64                       `queryParam:"style=form,explode=true,name=start"`
	StartDate                    *time.Time                   `queryParam:"style=form,explode=true,name=startDate"`
	TagsAllOf                    *interface{}                 `queryParam:"style=form,explode=false,name=tagsAllOf"`
	TagsOneOf                    *interface{}                 `queryParam:"style=form,explode=false,name=tagsOneOf"`
}

type SearchVideosRequest struct {
	QueryParams SearchVideosQueryParams
}

type SearchVideosResponse struct {
	ContentType       string
	StatusCode        int64
	VideoListResponse *interface{}
}
