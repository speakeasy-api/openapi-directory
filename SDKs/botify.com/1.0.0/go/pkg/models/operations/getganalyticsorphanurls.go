package operations

import (
	"openapi/pkg/models/shared"
)

type GetGanalyticsOrphanUrLsMediumEnum string

const (
	GetGanalyticsOrphanURLsMediumEnumOrganic GetGanalyticsOrphanUrLsMediumEnum = "organic"
	GetGanalyticsOrphanURLsMediumEnumSocial  GetGanalyticsOrphanUrLsMediumEnum = "social"
)

type GetGanalyticsOrphanUrLsSourceEnum string

const (
	GetGanalyticsOrphanURLsSourceEnumAll        GetGanalyticsOrphanUrLsSourceEnum = "all"
	GetGanalyticsOrphanURLsSourceEnumAol        GetGanalyticsOrphanUrLsSourceEnum = "aol"
	GetGanalyticsOrphanURLsSourceEnumAsk        GetGanalyticsOrphanUrLsSourceEnum = "ask"
	GetGanalyticsOrphanURLsSourceEnumBaidu      GetGanalyticsOrphanUrLsSourceEnum = "baidu"
	GetGanalyticsOrphanURLsSourceEnumBing       GetGanalyticsOrphanUrLsSourceEnum = "bing"
	GetGanalyticsOrphanURLsSourceEnumFacebook   GetGanalyticsOrphanUrLsSourceEnum = "facebook"
	GetGanalyticsOrphanURLsSourceEnumGoogle     GetGanalyticsOrphanUrLsSourceEnum = "google"
	GetGanalyticsOrphanURLsSourceEnumGooglePlus GetGanalyticsOrphanUrLsSourceEnum = "google+"
	GetGanalyticsOrphanURLsSourceEnumLinkedin   GetGanalyticsOrphanUrLsSourceEnum = "linkedin"
	GetGanalyticsOrphanURLsSourceEnumNaver      GetGanalyticsOrphanUrLsSourceEnum = "naver"
	GetGanalyticsOrphanURLsSourceEnumPinterest  GetGanalyticsOrphanUrLsSourceEnum = "pinterest"
	GetGanalyticsOrphanURLsSourceEnumReddit     GetGanalyticsOrphanUrLsSourceEnum = "reddit"
	GetGanalyticsOrphanURLsSourceEnumTumblr     GetGanalyticsOrphanUrLsSourceEnum = "tumblr"
	GetGanalyticsOrphanURLsSourceEnumTwitter    GetGanalyticsOrphanUrLsSourceEnum = "twitter"
	GetGanalyticsOrphanURLsSourceEnumYahoo      GetGanalyticsOrphanUrLsSourceEnum = "yahoo"
	GetGanalyticsOrphanURLsSourceEnumYandex     GetGanalyticsOrphanUrLsSourceEnum = "yandex"
)

type GetGanalyticsOrphanUrLsPathParams struct {
	AnalysisSlug string                            `pathParam:"style=simple,explode=false,name=analysis_slug"`
	Medium       GetGanalyticsOrphanUrLsMediumEnum `pathParam:"style=simple,explode=false,name=medium"`
	ProjectSlug  string                            `pathParam:"style=simple,explode=false,name=project_slug"`
	Source       GetGanalyticsOrphanUrLsSourceEnum `pathParam:"style=simple,explode=false,name=source"`
	Username     string                            `pathParam:"style=simple,explode=false,name=username"`
}

type GetGanalyticsOrphanUrLsQueryParams struct {
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	Size *int64 `queryParam:"style=form,explode=true,name=size"`
}

type GetGanalyticsOrphanUrLs200ApplicationJSON struct {
	Count    *int64                   `json:"count,omitempty"`
	Next     *string                  `json:"next,omitempty"`
	Page     *int64                   `json:"page,omitempty"`
	Previous *string                  `json:"previous,omitempty"`
	Results  []shared.CrawlOrphanUrLs `json:"results,omitempty"`
	Size     *int64                   `json:"size,omitempty"`
}

type GetGanalyticsOrphanUrLsRequest struct {
	PathParams  GetGanalyticsOrphanUrLsPathParams
	QueryParams GetGanalyticsOrphanUrLsQueryParams
}

type GetGanalyticsOrphanUrLsResponse struct {
	ContentType                                     string
	DefaultPayload                                  *shared.DefaultPayload
	StatusCode                                      int64
	GetGanalyticsOrphanURLs200ApplicationJSONObject *GetGanalyticsOrphanUrLs200ApplicationJSON
}
