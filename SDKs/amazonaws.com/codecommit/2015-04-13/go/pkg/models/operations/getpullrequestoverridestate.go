// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// GetPullRequestOverrideStateXAmzTargetEnum
type GetPullRequestOverrideStateXAmzTargetEnum string

const (
	GetPullRequestOverrideStateXAmzTargetEnumCodeCommit20150413GetPullRequestOverrideState GetPullRequestOverrideStateXAmzTargetEnum = "CodeCommit_20150413.GetPullRequestOverrideState"
)

func (e GetPullRequestOverrideStateXAmzTargetEnum) ToPointer() *GetPullRequestOverrideStateXAmzTargetEnum {
	return &e
}

func (e *GetPullRequestOverrideStateXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CodeCommit_20150413.GetPullRequestOverrideState":
		*e = GetPullRequestOverrideStateXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GetPullRequestOverrideStateXAmzTargetEnum: %v", v)
	}
}

type GetPullRequestOverrideStateRequest struct {
	GetPullRequestOverrideStateInput shared.GetPullRequestOverrideStateInput   `request:"mediaType=application/json"`
	XAmzAlgorithm                    *string                                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                *string                                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                   *string                                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                         *string                                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                *string                                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                    *string                                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                *string                                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                       GetPullRequestOverrideStateXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetPullRequestOverrideStateResponse struct {
	ContentType string
	// EncryptionIntegrityChecksFailedException
	EncryptionIntegrityChecksFailedException interface{}
	// EncryptionKeyAccessDeniedException
	EncryptionKeyAccessDeniedException interface{}
	// EncryptionKeyDisabledException
	EncryptionKeyDisabledException interface{}
	// EncryptionKeyNotFoundException
	EncryptionKeyNotFoundException interface{}
	// EncryptionKeyUnavailableException
	EncryptionKeyUnavailableException interface{}
	// Success
	GetPullRequestOverrideStateOutput *shared.GetPullRequestOverrideStateOutput
	// InvalidPullRequestIdException
	InvalidPullRequestIDException interface{}
	// InvalidRevisionIdException
	InvalidRevisionIDException interface{}
	// PullRequestDoesNotExistException
	PullRequestDoesNotExistException interface{}
	// PullRequestIdRequiredException
	PullRequestIDRequiredException interface{}
	// RevisionIdRequiredException
	RevisionIDRequiredException interface{}
	StatusCode                  int
	RawResponse                 *http.Response
}
