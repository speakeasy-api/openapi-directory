// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks struct {
	// The `id` of the GitHub App.
	AppID int64 `json:"app_id"`
	// Set to `true` to enable automatic creation of CheckSuite events upon pushes to the repository, or `false` to disable them.
	Setting bool `json:"setting"`
}

type ChecksSetSuitesPreferencesRequestBody struct {
	// Enables or disables automatic creation of CheckSuite events upon pushes to the repository. Enabled by default. See the [`auto_trigger_checks` object](https://docs.github.com/enterprise-server@2.21/rest/reference/checks#auto_trigger_checks-object) description for details.
	AutoTriggerChecks []ChecksSetSuitesPreferencesRequestBodyAutoTriggerChecks `json:"auto_trigger_checks,omitempty"`
}

type ChecksSetSuitesPreferencesRequest struct {
	RequestBody ChecksSetSuitesPreferencesRequestBody `request:"mediaType=application/json"`
	Owner       string                                `pathParam:"style=simple,explode=false,name=owner"`
	Repo        string                                `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksSetSuitesPreferencesResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	CheckSuitePreference *shared.CheckSuitePreference
}
