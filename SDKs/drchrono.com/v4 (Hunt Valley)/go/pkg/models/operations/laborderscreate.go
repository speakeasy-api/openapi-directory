// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type LabOrdersCreateSecurity struct {
	DrchronoOauth2 string `security:"scheme,type=oauth2,name=Authorization"`
}

type LabOrdersCreateRequest struct {
	Doctor *int64  `queryParam:"style=form,explode=true,name=doctor"`
	Since  *string `queryParam:"style=form,explode=true,name=since"`
}

type LabOrdersCreateResponse struct {
	ContentType string
	// Created
	LabOrder    *shared.LabOrder
	StatusCode  int
	RawResponse *http.Response
}
