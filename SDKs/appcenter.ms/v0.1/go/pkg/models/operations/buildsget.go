// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type BuildsGetSecurity struct {
	APIToken string `security:"scheme,type=apiKey,subtype=header,name=X-API-Token"`
}

type BuildsGetRequest struct {
	// The name of the application
	AppName string `pathParam:"style=simple,explode=false,name=app_name"`
	// The build ID
	BuildID int64 `pathParam:"style=simple,explode=false,name=build_id"`
	// The name of the owner
	OwnerName string `pathParam:"style=simple,explode=false,name=owner_name"`
}

// BuildsGet200ApplicationJSON - Success
type BuildsGet200ApplicationJSON struct {
	// The build number
	BuildNumber string `json:"buildNumber"`
	// The time the build was finished
	FinishTime *string `json:"finishTime,omitempty"`
	// The build ID
	ID int64 `json:"id"`
	// The time the build status was last changed
	LastChangedDate *string `json:"lastChangedDate,omitempty"`
	// The time the build was queued
	QueueTime string `json:"queueTime"`
	// The build result
	Result string `json:"result"`
	// The source branch name
	SourceBranch string `json:"sourceBranch"`
	// The source SHA
	SourceVersion string `json:"sourceVersion"`
	// The time the build was started
	StartTime *string `json:"startTime,omitempty"`
	// The build status
	Status string `json:"status"`
}

type BuildsGetResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Success
	BuildsGet200ApplicationJSONObject *BuildsGet200ApplicationJSON
}
