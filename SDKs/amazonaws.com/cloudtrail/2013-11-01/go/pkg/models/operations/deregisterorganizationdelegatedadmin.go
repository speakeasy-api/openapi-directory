// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// DeregisterOrganizationDelegatedAdminXAmzTargetEnum
type DeregisterOrganizationDelegatedAdminXAmzTargetEnum string

const (
	DeregisterOrganizationDelegatedAdminXAmzTargetEnumComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdmin DeregisterOrganizationDelegatedAdminXAmzTargetEnum = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin"
)

func (e DeregisterOrganizationDelegatedAdminXAmzTargetEnum) ToPointer() *DeregisterOrganizationDelegatedAdminXAmzTargetEnum {
	return &e
}

func (e *DeregisterOrganizationDelegatedAdminXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin":
		*e = DeregisterOrganizationDelegatedAdminXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DeregisterOrganizationDelegatedAdminXAmzTargetEnum: %v", v)
	}
}

type DeregisterOrganizationDelegatedAdminRequest struct {
	DeregisterOrganizationDelegatedAdminRequest shared.DeregisterOrganizationDelegatedAdminRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                               *string                                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                           *string                                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                              *string                                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                                    *string                                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                           *string                                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                               *string                                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                           *string                                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                                  DeregisterOrganizationDelegatedAdminXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeregisterOrganizationDelegatedAdminResponse struct {
	// AccountNotFoundException
	AccountNotFoundException interface{}
	// AccountNotRegisteredException
	AccountNotRegisteredException interface{}
	// CloudTrailAccessNotEnabledException
	CloudTrailAccessNotEnabledException interface{}
	// ConflictException
	ConflictException interface{}
	ContentType       string
	// Success
	DeregisterOrganizationDelegatedAdminResponse map[string]interface{}
	// InsufficientDependencyServiceAccessPermissionException
	InsufficientDependencyServiceAccessPermissionException interface{}
	// InvalidParameterException
	InvalidParameterException interface{}
	// NotOrganizationManagementAccountException
	NotOrganizationManagementAccountException interface{}
	// OperationNotPermittedException
	OperationNotPermittedException interface{}
	// OrganizationNotInAllFeaturesModeException
	OrganizationNotInAllFeaturesModeException interface{}
	// OrganizationsNotInUseException
	OrganizationsNotInUseException interface{}
	StatusCode                     int
	RawResponse                    *http.Response
	// UnsupportedOperationException
	UnsupportedOperationException interface{}
}
