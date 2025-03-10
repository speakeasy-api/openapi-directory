// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type ReposUpdateDeploymentBranchPolicyRequest struct {
	// The unique identifier of the branch policy.
	BranchPolicyID                    int64                                    `pathParam:"style=simple,explode=false,name=branch_policy_id"`
	DeploymentBranchPolicyNamePattern shared.DeploymentBranchPolicyNamePattern `request:"mediaType=application/json"`
	// The name of the environment.
	EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
	// The account owner of the repository. The name is not case sensitive.
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	// The name of the repository. The name is not case sensitive.
	Repo string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateDeploymentBranchPolicyResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Response
	DeploymentBranchPolicy *shared.DeploymentBranchPolicy
}
