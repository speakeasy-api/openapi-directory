package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassificationsSortEnum string

const (
	GetClassificationsSortEnumCreatedAt GetClassificationsSortEnum = "created_at"
	GetClassificationsSortEnumUpdatedAt GetClassificationsSortEnum = "updated_at"
	GetClassificationsSortEnumValue     GetClassificationsSortEnum = "value"
)

type GetClassificationsTypeEnum string

const (
	GetClassificationsTypeEnumAlternateFeedType GetClassificationsTypeEnum = "AlternateFeedType"
	GetClassificationsTypeEnumGenre             GetClassificationsTypeEnum = "Genre"
	GetClassificationsTypeEnumIndustry          GetClassificationsTypeEnum = "Industry"
	GetClassificationsTypeEnumLanguage          GetClassificationsTypeEnum = "Language"
	GetClassificationsTypeEnumMediaRating       GetClassificationsTypeEnum = "MediaRating"
)

type GetClassificationsQueryParams struct {
	Ids        []string                     `queryParam:"style=form,explode=true,name=ids[]"`
	IsCountry  *string                      `queryParam:"style=form,explode=true,name=is_country"`
	PageNumber *int64                       `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize   *int64                       `queryParam:"style=form,explode=true,name=page[size]"`
	Q          *string                      `queryParam:"style=form,explode=true,name=q"`
	Sort       []GetClassificationsSortEnum `queryParam:"style=form,explode=false,name=sort"`
	Type       *GetClassificationsTypeEnum  `queryParam:"style=form,explode=true,name=type"`
}

type GetClassifications200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Classification `json:"data,omitempty"`
	Links *shared.Links           `json:"links,omitempty"`
}

// GetClassifications400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetClassifications400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetClassifications400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                                     `json:"code,omitempty"`
	Detail *string                                                     `json:"detail,omitempty"`
	Source *GetClassifications400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                                     `json:"status,omitempty"`
	Title  *string                                                     `json:"title,omitempty"`
}

type GetClassifications400ApplicationVndAPIPlusJSON struct {
	Errors []GetClassifications400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetClassificationsRequest struct {
	QueryParams GetClassificationsQueryParams
}

type GetClassificationsResponse struct {
	ContentType                                          string
	Headers                                              map[string][]string
	StatusCode                                           int64
	GetClassifications200ApplicationVndAPIPlusJSONObject *GetClassifications200ApplicationVndAPIPlusJSON
	GetClassifications400ApplicationVndAPIPlusJSONObject *GetClassifications400ApplicationVndAPIPlusJSON
}
