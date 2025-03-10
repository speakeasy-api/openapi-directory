// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// AddTagsToOnPremisesInstancesXAmzTargetEnum
type AddTagsToOnPremisesInstancesXAmzTargetEnum string

const (
	AddTagsToOnPremisesInstancesXAmzTargetEnumCodeDeploy20141006AddTagsToOnPremisesInstances AddTagsToOnPremisesInstancesXAmzTargetEnum = "CodeDeploy_20141006.AddTagsToOnPremisesInstances"
)

func (e AddTagsToOnPremisesInstancesXAmzTargetEnum) ToPointer() *AddTagsToOnPremisesInstancesXAmzTargetEnum {
	return &e
}

func (e *AddTagsToOnPremisesInstancesXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "CodeDeploy_20141006.AddTagsToOnPremisesInstances":
		*e = AddTagsToOnPremisesInstancesXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AddTagsToOnPremisesInstancesXAmzTargetEnum: %v", v)
	}
}

type AddTagsToOnPremisesInstancesRequest struct {
	AddTagsToOnPremisesInstancesInput shared.AddTagsToOnPremisesInstancesInput   `request:"mediaType=application/json"`
	XAmzAlgorithm                     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                 *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                 *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                        AddTagsToOnPremisesInstancesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AddTagsToOnPremisesInstancesResponse struct {
	ContentType string
	// InstanceLimitExceededException
	InstanceLimitExceededException interface{}
	// InstanceNameRequiredException
	InstanceNameRequiredException interface{}
	// InstanceNotRegisteredException
	InstanceNotRegisteredException interface{}
	// InvalidInstanceNameException
	InvalidInstanceNameException interface{}
	// InvalidTagException
	InvalidTagException interface{}
	StatusCode          int
	RawResponse         *http.Response
	// TagLimitExceededException
	TagLimitExceededException interface{}
	// TagRequiredException
	TagRequiredException interface{}
}
