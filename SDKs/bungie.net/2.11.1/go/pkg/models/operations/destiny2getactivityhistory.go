// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type Destiny2GetActivityHistoryPathParams struct {
	// The id of the character to retrieve.
	CharacterID int64 `pathParam:"style=simple,explode=false,name=characterId"`
	// The Destiny membershipId of the user to retrieve.
	DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
	// A valid non-BungieNet membership type.
	MembershipType int `pathParam:"style=simple,explode=false,name=membershipType"`
}

type Destiny2GetActivityHistoryQueryParams struct {
	// Number of rows to return
	Count *int `queryParam:"style=form,explode=true,name=count"`
	// A filter for the activity mode to be returned. None returns all activities. See the documentation for DestinyActivityModeType for valid values, and pass in string representation.
	Mode *int `queryParam:"style=form,explode=true,name=mode"`
	// Page number to return, starting with 0.
	Page *int `queryParam:"style=form,explode=true,name=page"`
}

type Destiny2GetActivityHistoryRequest struct {
	PathParams  Destiny2GetActivityHistoryPathParams
	QueryParams Destiny2GetActivityHistoryQueryParams
}

// Destiny2GetActivityHistory200Wildcard - Look at the Response property for more information about the nature of this response
type Destiny2GetActivityHistory200Wildcard struct {
	DetailedErrorTrace *string
	ErrorCode          *int
	ErrorStatus        *string
	Message            *string
	MessageData        map[string]string
	Response           *shared.DestinyHistoricalStatsDestinyActivityHistoryResults
	ThrottleSeconds    *int
}

type Destiny2GetActivityHistoryResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
