package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecordsFormatPathParams struct {
	Format shared.FormatEnum `pathParam:"style=simple,explode=false,name=format"`
}

type GetRecordsFormatQueryParams struct {
	AndCategory              *shared.APIKeyEnum   `queryParam:"style=form,explode=true,name=and[category][]"`
	AndCentury               *string              `queryParam:"style=form,explode=true,name=and[century]"`
	AndCollection            *string              `queryParam:"style=form,explode=true,name=and[collection][]"`
	AndContentPartner        *string              `queryParam:"style=form,explode=true,name=and[content_partner][]"`
	AndCreator               *string              `queryParam:"style=form,explode=true,name=and[creator][]"`
	AndDate                  *string              `queryParam:"style=form,explode=true,name=and[date]"`
	AndDcType                *string              `queryParam:"style=form,explode=true,name=and[dc_type][]"`
	AndDecade                *string              `queryParam:"style=form,explode=true,name=and[decade]"`
	AndFormat                *string              `queryParam:"style=form,explode=true,name=and[format][]"`
	AndHasLargeThumbnailURL  *shared.APIKeyEnum2  `queryParam:"style=form,explode=true,name=and[has_large_thumbnail_url]"`
	AndHasLatLng             *bool                `queryParam:"style=form,explode=true,name=and[has_lat_lng]"`
	AndIsCommercialUse       *bool                `queryParam:"style=form,explode=true,name=and[is_commercial_use]"`
	AndOrFilterField         *string              `queryParam:"style=form,explode=true,name=and[or][{filter_field}][]"`
	AndPlacename             *string              `queryParam:"style=form,explode=true,name=and[placename][]"`
	AndPrimaryCollection     *string              `queryParam:"style=form,explode=true,name=and[primary_collection][]"`
	AndSubject               *string              `queryParam:"style=form,explode=true,name=and[subject][]"`
	AndTitle                 *string              `queryParam:"style=form,explode=true,name=and[title][]"`
	AndUsage                 *shared.APIKeyEnum1  `queryParam:"style=form,explode=true,name=and[usage][]"`
	AndYear                  *string              `queryParam:"style=form,explode=true,name=and[year]"`
	APIKey                   string               `queryParam:"style=form,explode=true,name=api_key"`
	Direction                *shared.FieldsEnum1  `queryParam:"style=form,explode=true,name=direction"`
	ExcludeFiltersFromFacets *bool                `queryParam:"style=form,explode=true,name=exclude_filters_from_facets"`
	Facets                   []shared.FieldsEnum2 `queryParam:"style=form,explode=false,name=facets"`
	FacetsPage               *int64               `queryParam:"style=form,explode=true,name=facets_page"`
	FacetsPerPage            *int64               `queryParam:"style=form,explode=true,name=facets_per_page"`
	Fields                   *string              `queryParam:"style=form,explode=false,name=fields"`
	GeoBbox                  *string              `queryParam:"style=form,explode=true,name=geo_bbox"`
	Page                     *int64               `queryParam:"style=form,explode=true,name=page"`
	PerPage                  *int64               `queryParam:"style=form,explode=true,name=per_page"`
	Sort                     *shared.FieldsEnum   `queryParam:"style=form,explode=true,name=sort"`
	Text                     *string              `queryParam:"style=form,explode=true,name=text"`
	WithoutFilterField       *string              `queryParam:"style=form,explode=true,name=without[{filter_field}]"`
}

type GetRecordsFormat200ApplicationJSON struct {
	Facets      map[string]map[string]int64 `json:"facets,omitempty"`
	Page        *int64                      `json:"page,omitempty"`
	PerPage     *int64                      `json:"per_page,omitempty"`
	Records     []shared.Record             `json:"records,omitempty"`
	RequestURL  *string                     `json:"request_url,omitempty"`
	ResultCount *int64                      `json:"result_count,omitempty"`
}

type GetRecordsFormatRequest struct {
	PathParams  GetRecordsFormatPathParams
	QueryParams GetRecordsFormatQueryParams
}

type GetRecordsFormatResponse struct {
	Body                                     []byte
	ContentType                              string
	StatusCode                               int64
	GetRecordsFormat200ApplicationJSONObject *GetRecordsFormat200ApplicationJSON
	GetRecordsFormat400ApplicationJSONObject map[string]interface{}
	GetRecordsFormat403ApplicationJSONObject map[string]interface{}
}
