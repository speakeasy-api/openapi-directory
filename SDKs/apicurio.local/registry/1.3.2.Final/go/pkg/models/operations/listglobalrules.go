// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ListGlobalRulesResponse struct {
	ContentType string
	// Common response for all operations that can fail with an unexpected server error.
	Error *shared.Error
	// The list of names of the globally configured rules.
	RuleTypes   []shared.RuleTypeEnum
	StatusCode  int
	RawResponse *http.Response
}
