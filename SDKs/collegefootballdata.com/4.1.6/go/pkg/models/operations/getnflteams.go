// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetNFLTeamsResponse struct {
	ContentType string
	// successful operation
	DraftTeams  []shared.DraftTeam
	StatusCode  int
	RawResponse *http.Response
}
