// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type GetArtifactVersionMetaDataRequest struct {
	// The artifact ID.  Can be a string (client-provided) or integer (server-generated) representing the unique artifact identifier.
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
	// The unique identifier of a specific version of the artifact content.
	Version int64 `pathParam:"style=simple,explode=false,name=version"`
}

type GetArtifactVersionMetaDataResponse struct {
	ContentType string
	// Common response for all operations that can return a `404` error.
	Error       *shared.Error
	StatusCode  int
	RawResponse *http.Response
	// The artifact version's metadata.
	VersionMetaData *shared.VersionMetaData
}
