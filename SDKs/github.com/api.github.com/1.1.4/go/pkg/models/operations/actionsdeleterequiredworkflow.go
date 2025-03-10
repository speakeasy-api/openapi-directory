// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type ActionsDeleteRequiredWorkflowRequest struct {
	// The organization name. The name is not case sensitive.
	Org string `pathParam:"style=simple,explode=false,name=org"`
	// The unique identifier of the required workflow.
	RequiredWorkflowID int64 `pathParam:"style=simple,explode=false,name=required_workflow_id"`
}

type ActionsDeleteRequiredWorkflowResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
