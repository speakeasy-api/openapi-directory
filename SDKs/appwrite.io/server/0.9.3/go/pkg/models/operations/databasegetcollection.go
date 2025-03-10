// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DatabaseGetCollectionSecurity struct {
	Key     string `security:"scheme,type=apiKey,subtype=header,name=X-Appwrite-Key"`
	Project string `security:"scheme,type=apiKey,subtype=header,name=X-Appwrite-Project"`
}

type DatabaseGetCollectionRequest struct {
	// Collection unique ID.
	CollectionID string `pathParam:"style=simple,explode=false,name=collectionId"`
}

type DatabaseGetCollectionResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Collection
	Collection *shared.Collection
}
