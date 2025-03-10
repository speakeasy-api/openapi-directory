// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type Destiny2GetCharacterRequest struct {
	// ID of the character.
	CharacterID int64 `pathParam:"style=simple,explode=false,name=characterId"`
	// A comma separated list of components to return (as strings or numeric values). See the DestinyComponentType enum for valid components to request. You must request at least one component to receive results.
	Components []int `queryParam:"style=form,explode=false,name=components"`
	// Destiny membership ID.
	DestinyMembershipID int64 `pathParam:"style=simple,explode=false,name=destinyMembershipId"`
	// A valid non-BungieNet membership type.
	MembershipType int `pathParam:"style=simple,explode=false,name=membershipType"`
}

// Destiny2GetCharacter200Wildcard - The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
type Destiny2GetCharacter200Wildcard struct {
	DetailedErrorTrace *string
	ErrorCode          *int
	ErrorStatus        *string
	Message            *string
	MessageData        map[string]string
	// The response contract for GetDestinyCharacter, with components that can be returned for character and item-level data.
	Response        *shared.DestinyResponsesDestinyCharacterResponse
	ThrottleSeconds *int
}

type Destiny2GetCharacterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
