package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassificationInclusionsClassificationTypeEnum string

const (
	GetClassificationInclusionsClassificationTypeEnumAlternateFeedType GetClassificationInclusionsClassificationTypeEnum = "AlternateFeedType"
	GetClassificationInclusionsClassificationTypeEnumGenre             GetClassificationInclusionsClassificationTypeEnum = "Genre"
	GetClassificationInclusionsClassificationTypeEnumIndustry          GetClassificationInclusionsClassificationTypeEnum = "Industry"
	GetClassificationInclusionsClassificationTypeEnumLanguage          GetClassificationInclusionsClassificationTypeEnum = "Language"
	GetClassificationInclusionsClassificationTypeEnumMediaRating       GetClassificationInclusionsClassificationTypeEnum = "MediaRating"
)

type GetClassificationInclusionsClassifiedTypeEnum string

const (
	GetClassificationInclusionsClassifiedTypeEnumSeries  GetClassificationInclusionsClassifiedTypeEnum = "Series"
	GetClassificationInclusionsClassifiedTypeEnumSeason  GetClassificationInclusionsClassifiedTypeEnum = "Season"
	GetClassificationInclusionsClassifiedTypeEnumEpisode GetClassificationInclusionsClassifiedTypeEnum = "Episode"
)

type GetClassificationInclusionsSortEnum string

const (
	GetClassificationInclusionsSortEnumClassificationValue GetClassificationInclusionsSortEnum = "classification_value"
	GetClassificationInclusionsSortEnumCreatedAt           GetClassificationInclusionsSortEnum = "created_at"
	GetClassificationInclusionsSortEnumPosition            GetClassificationInclusionsSortEnum = "position"
)

type GetClassificationInclusionsQueryParams struct {
	ClassificationID   *string                                            `queryParam:"style=form,explode=true,name=classification_id"`
	ClassificationType *GetClassificationInclusionsClassificationTypeEnum `queryParam:"style=form,explode=true,name=classification_type"`
	ClassifiedID       *string                                            `queryParam:"style=form,explode=true,name=classified_id"`
	ClassifiedType     *GetClassificationInclusionsClassifiedTypeEnum     `queryParam:"style=form,explode=true,name=classified_type"`
	Ids                []string                                           `queryParam:"style=form,explode=true,name=ids[]"`
	PageNumber         *int64                                             `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize           *int64                                             `queryParam:"style=form,explode=true,name=page[size]"`
	Q                  *string                                            `queryParam:"style=form,explode=true,name=q"`
	Sort               []GetClassificationInclusionsSortEnum              `queryParam:"style=form,explode=false,name=sort"`
}

type GetClassificationInclusions200ApplicationVndAPIPlusJSON struct {
	Data  []shared.ClassificationInclusion `json:"data,omitempty"`
	Links *shared.Links                    `json:"links,omitempty"`
}

// GetClassificationInclusions400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetClassificationInclusions400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetClassificationInclusions400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                                              `json:"code,omitempty"`
	Detail *string                                                              `json:"detail,omitempty"`
	Source *GetClassificationInclusions400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                                              `json:"status,omitempty"`
	Title  *string                                                              `json:"title,omitempty"`
}

type GetClassificationInclusions400ApplicationVndAPIPlusJSON struct {
	Errors []GetClassificationInclusions400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetClassificationInclusionsRequest struct {
	QueryParams GetClassificationInclusionsQueryParams
}

type GetClassificationInclusionsResponse struct {
	ContentType                                                   string
	Headers                                                       map[string][]string
	StatusCode                                                    int64
	GetClassificationInclusions200ApplicationVndAPIPlusJSONObject *GetClassificationInclusions200ApplicationVndAPIPlusJSON
	GetClassificationInclusions400ApplicationVndAPIPlusJSONObject *GetClassificationInclusions400ApplicationVndAPIPlusJSON
}
