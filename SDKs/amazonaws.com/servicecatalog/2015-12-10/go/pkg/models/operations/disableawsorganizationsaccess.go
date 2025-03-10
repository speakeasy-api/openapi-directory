// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// DisableAWSOrganizationsAccessXAmzTargetEnum
type DisableAWSOrganizationsAccessXAmzTargetEnum string

const (
	DisableAWSOrganizationsAccessXAmzTargetEnumAws242ServiceCatalogServiceDisableAwsOrganizationsAccess DisableAWSOrganizationsAccessXAmzTargetEnum = "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess"
)

func (e DisableAWSOrganizationsAccessXAmzTargetEnum) ToPointer() *DisableAWSOrganizationsAccessXAmzTargetEnum {
	return &e
}

func (e *DisableAWSOrganizationsAccessXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "AWS242ServiceCatalogService.DisableAWSOrganizationsAccess":
		*e = DisableAWSOrganizationsAccessXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for DisableAWSOrganizationsAccessXAmzTargetEnum: %v", v)
	}
}

type DisableAWSOrganizationsAccessRequest struct {
	RequestBody       map[string]interface{}                      `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisableAWSOrganizationsAccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisableAWSOrganizationsAccessResponse struct {
	ContentType string
	// Success
	DisableAWSOrganizationsAccessOutput map[string]interface{}
	// InvalidStateException
	InvalidStateException interface{}
	// OperationNotSupportedException
	OperationNotSupportedException interface{}
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	StatusCode                int
	RawResponse               *http.Response
}
