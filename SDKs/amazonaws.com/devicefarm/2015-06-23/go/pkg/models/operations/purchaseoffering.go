// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PurchaseOfferingXAmzTargetEnum
type PurchaseOfferingXAmzTargetEnum string

const (
	PurchaseOfferingXAmzTargetEnumDeviceFarm20150623PurchaseOffering PurchaseOfferingXAmzTargetEnum = "DeviceFarm_20150623.PurchaseOffering"
)

func (e PurchaseOfferingXAmzTargetEnum) ToPointer() *PurchaseOfferingXAmzTargetEnum {
	return &e
}

func (e *PurchaseOfferingXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DeviceFarm_20150623.PurchaseOffering":
		*e = PurchaseOfferingXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PurchaseOfferingXAmzTargetEnum: %v", v)
	}
}

type PurchaseOfferingRequest struct {
	PurchaseOfferingRequest shared.PurchaseOfferingRequest `request:"mediaType=application/json"`
	XAmzAlgorithm           *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256       *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential          *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken       *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature           *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders       *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget              PurchaseOfferingXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type PurchaseOfferingResponse struct {
	// ArgumentException
	ArgumentException interface{}
	ContentType       string
	// LimitExceededException
	LimitExceededException interface{}
	// NotEligibleException
	NotEligibleException interface{}
	// NotFoundException
	NotFoundException interface{}
	// Success
	PurchaseOfferingResult *shared.PurchaseOfferingResult
	// ServiceAccountException
	ServiceAccountException interface{}
	StatusCode              int
	RawResponse             *http.Response
}
