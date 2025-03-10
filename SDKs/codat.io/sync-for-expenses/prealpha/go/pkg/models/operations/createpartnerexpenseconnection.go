// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CreatePartnerExpenseConnectionRequest struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type CreatePartnerExpenseConnectionResponse struct {
	ContentType string
	// Success
	DataConnection *shared.DataConnection
	StatusCode     int
	RawResponse    *http.Response
}
