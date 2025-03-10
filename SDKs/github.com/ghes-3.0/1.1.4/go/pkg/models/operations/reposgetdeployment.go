// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposGetDeploymentRequest struct {
	// deployment_id parameter
	DeploymentID int64  `pathParam:"style=simple,explode=false,name=deployment_id"`
	Owner        string `pathParam:"style=simple,explode=false,name=owner"`
	Repo         string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposGetDeploymentResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Resource not found
	BasicError *shared.BasicError
	// Response
	Deployment *shared.Deployment
}
