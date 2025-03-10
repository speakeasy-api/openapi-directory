// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type AllergiesCreateSecurity struct {
	DrchronoOauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type AllergiesCreateRequest struct {
	Doctor  *int64 `queryParam:"style=form,explode=true,name=doctor"`
	Patient *int64 `queryParam:"style=form,explode=true,name=patient"`
}

type AllergiesCreateResponse struct {
	ContentType string
	// Created
	PatientAllergy *shared.PatientAllergy
	StatusCode     int
	RawResponse    *http.Response
}
