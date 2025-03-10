// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type PostVolumesNameRequest struct {
	// Input parameter that are required to provision an existing volume to a new space and to unprovision it from a space.
	UpdateVolume shared.UpdateVolume `request:"mediaType=application/json"`
	// The unique ID of your organization space where you want to create or work with your containers. Run `cf space <space_name> --guid`, where `<space_name>` is the name of your space, to retrieve your space ID.
	XAuthProjectID string `header:"style=simple,explode=false,name=X-Auth-Project-Id"`
	// The Bluemix JSON web token that you receive when logging into Bluemix. Run `cf oauth-token` to retrieve your access token.
	XAuthToken string `header:"style=simple,explode=false,name=X-Auth-Token"`
	// The name of the volume that you want to share with another space in your organization.
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PostVolumesNameResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Ok. A list with detailed information about the volume is returned. Review the changes in the `otherSpaceVisibility` property.
	Volume *shared.Volume
}
