// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type LabDocumentsCreateSecurity struct {
	DrchronoOauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type LabDocumentsCreateRequest struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabDocumentsCreateResponse struct {
	ContentType string
	// Created
	LabOrderDocument *shared.LabOrderDocument
	StatusCode       int
	RawResponse      *http.Response
}
