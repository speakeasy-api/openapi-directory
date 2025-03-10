// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DependabotListAlertsForRepoRequest struct {
	// A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results after this cursor.
	After *string `queryParam:"style=form,explode=true,name=after"`
	// A cursor, as given in the [Link header](https://docs.github.com/enterprise-cloud@latest//rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for results before this cursor.
	Before *string `queryParam:"style=form,explode=true,name=before"`
	// The direction to sort the results by.
	Direction *shared.DirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	// A comma-separated list of ecosystems. If specified, only alerts for these ecosystems will be returned.
	//
	// Can be: `composer`, `go`, `maven`, `npm`, `nuget`, `pip`, `pub`, `rubygems`, `rust`
	Ecosystem *string `queryParam:"style=form,explode=true,name=ecosystem"`
	// **Deprecated**. The number of results per page (max 100), starting from the first matching result.
	// This parameter must not be used in combination with `last`.
	// Instead, use `per_page` in combination with `after` to fetch the first page of results.
	First *int64 `queryParam:"style=form,explode=true,name=first"`
	// **Deprecated**. The number of results per page (max 100), starting from the last matching result.
	// This parameter must not be used in combination with `first`.
	// Instead, use `per_page` in combination with `before` to fetch the last page of results.
	Last *int64 `queryParam:"style=form,explode=true,name=last"`
	// A comma-separated list of full manifest paths. If specified, only alerts for these manifests will be returned.
	Manifest *string `queryParam:"style=form,explode=true,name=manifest"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// A comma-separated list of package names. If specified, only alerts for these packages will be returned.
	Package *string `queryParam:"style=form,explode=true,name=package"`
	// **Deprecated**. Page number of the results to fetch. Use cursor-based pagination with `before` or `after` instead.
	//
	// Deprecated: this field will be removed in a future release, please migrate away from it as soon as possible.
	Page *int64 `queryParam:"style=form,explode=true,name=page"`
	// The number of results per page (max 100).
	//
	// Deprecated: this field will be removed in a future release, please migrate away from it as soon as possible.
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
	// The scope of the vulnerable dependency. If specified, only alerts with this scope will be returned.
	Scope *shared.DependabotAlertScopeEnum `queryParam:"style=form,explode=true,name=scope"`
	// A comma-separated list of severities. If specified, only alerts with these severities will be returned.
	//
	// Can be: `low`, `medium`, `high`, `critical`
	Severity *string `queryParam:"style=form,explode=true,name=severity"`
	// The property by which to sort the results.
	// `created` means when the alert was created.
	// `updated` means when the alert's state last changed.
	Sort *shared.DependabotAlertSortEnum `queryParam:"style=form,explode=true,name=sort"`
	// A comma-separated list of states. If specified, only alerts with these states will be returned.
	//
	// Can be: `dismissed`, `fixed`, `open`
	State *string `queryParam:"style=form,explode=true,name=state"`
}

type DependabotListAlertsForRepoResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Bad Request
	BasicError *shared.BasicError
	// Response
	DependabotAlerts []shared.DependabotAlert
	// Bad Request
	ScimError *shared.ScimError
	// Validation failed, or the endpoint has been spammed.
	ValidationErrorSimple *shared.ValidationErrorSimple
}
