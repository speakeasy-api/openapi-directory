package operations

import (
	"openapi/pkg/models/shared"
)

type GetCreditsCreditableTypeEnum string

const (
	GetCreditsCreditableTypeEnumSeries  GetCreditsCreditableTypeEnum = "Series"
	GetCreditsCreditableTypeEnumSeason  GetCreditsCreditableTypeEnum = "Season"
	GetCreditsCreditableTypeEnumEpisode GetCreditsCreditableTypeEnum = "Episode"
)

type GetCreditsSortEnum string

const (
	GetCreditsSortEnumCreatedAt GetCreditsSortEnum = "created_at"
	GetCreditsSortEnumPosition  GetCreditsSortEnum = "position"
	GetCreditsSortEnumUpdatedAt GetCreditsSortEnum = "updated_at"
)

type GetCreditsQueryParams struct {
	CreditableID   *string                       `queryParam:"style=form,explode=true,name=creditable_id"`
	CreditableType *GetCreditsCreditableTypeEnum `queryParam:"style=form,explode=true,name=creditable_type"`
	Ids            []string                      `queryParam:"style=form,explode=true,name=ids[]"`
	PageNumber     *int64                        `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize       *int64                        `queryParam:"style=form,explode=true,name=page[size]"`
	Sort           []GetCreditsSortEnum          `queryParam:"style=form,explode=false,name=sort"`
}

type GetCredits200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Credit `json:"data,omitempty"`
	Links *shared.Links   `json:"links,omitempty"`
}

// GetCredits400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetCredits400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetCredits400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                             `json:"code,omitempty"`
	Detail *string                                             `json:"detail,omitempty"`
	Source *GetCredits400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                             `json:"status,omitempty"`
	Title  *string                                             `json:"title,omitempty"`
}

type GetCredits400ApplicationVndAPIPlusJSON struct {
	Errors []GetCredits400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetCreditsRequest struct {
	QueryParams GetCreditsQueryParams
}

type GetCreditsResponse struct {
	ContentType                                  string
	Headers                                      map[string][]string
	StatusCode                                   int64
	GetCredits200ApplicationVndAPIPlusJSONObject *GetCredits200ApplicationVndAPIPlusJSON
	GetCredits400ApplicationVndAPIPlusJSONObject *GetCredits400ApplicationVndAPIPlusJSON
}
