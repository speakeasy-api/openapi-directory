package operations

import (
	"openapi/pkg/models/shared"
)

type GetPeopleSortEnum string

const (
	GetPeopleSortEnumCreatedAt GetPeopleSortEnum = "created_at"
	GetPeopleSortEnumFirstName GetPeopleSortEnum = "first_name"
	GetPeopleSortEnumLastName  GetPeopleSortEnum = "last_name"
	GetPeopleSortEnumUpdatedAt GetPeopleSortEnum = "updated_at"
)

type GetPeopleQueryParams struct {
	Ids        []string            `queryParam:"style=form,explode=true,name=ids[]"`
	PageNumber *int64              `queryParam:"style=form,explode=true,name=page[number]"`
	PageSize   *int64              `queryParam:"style=form,explode=true,name=page[size]"`
	Q          *string             `queryParam:"style=form,explode=true,name=q"`
	Sort       []GetPeopleSortEnum `queryParam:"style=form,explode=false,name=sort"`
}

type GetPeople200ApplicationVndAPIPlusJSON struct {
	Data  []shared.Person `json:"data,omitempty"`
	Links *shared.Links   `json:"links,omitempty"`
}

// GetPeople400ApplicationVndAPIPlusJSONErrorsSource
// An object containing references to the source of the error, optionally including any of the following members.
type GetPeople400ApplicationVndAPIPlusJSONErrorsSource struct {
	Parameter *string `json:"parameter,omitempty"`
	Pointer   *string `json:"pointer,omitempty"`
}

type GetPeople400ApplicationVndAPIPlusJSONErrors struct {
	Code   *string                                            `json:"code,omitempty"`
	Detail *string                                            `json:"detail,omitempty"`
	Source *GetPeople400ApplicationVndAPIPlusJSONErrorsSource `json:"source,omitempty"`
	Status *string                                            `json:"status,omitempty"`
	Title  *string                                            `json:"title,omitempty"`
}

type GetPeople400ApplicationVndAPIPlusJSON struct {
	Errors []GetPeople400ApplicationVndAPIPlusJSONErrors `json:"errors,omitempty"`
}

type GetPeopleRequest struct {
	QueryParams GetPeopleQueryParams
}

type GetPeopleResponse struct {
	ContentType                                 string
	Headers                                     map[string][]string
	StatusCode                                  int64
	GetPeople200ApplicationVndAPIPlusJSONObject *GetPeople200ApplicationVndAPIPlusJSON
	GetPeople400ApplicationVndAPIPlusJSONObject *GetPeople400ApplicationVndAPIPlusJSON
}
