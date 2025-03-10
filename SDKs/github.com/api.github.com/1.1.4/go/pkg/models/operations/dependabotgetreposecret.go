// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type DependabotGetRepoSecretRequest struct {
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
	// The name of the secret.
	SecretName string `pathParam:"style=simple,explode=false,name=secret_name"`
}

type DependabotGetRepoSecretResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	DependabotSecret *shared.DependabotSecret
}
