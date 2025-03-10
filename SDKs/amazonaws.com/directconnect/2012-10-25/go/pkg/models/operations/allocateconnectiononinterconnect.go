// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// AllocateConnectionOnInterconnectXAmzTargetEnum
type AllocateConnectionOnInterconnectXAmzTargetEnum string

const (
	AllocateConnectionOnInterconnectXAmzTargetEnumOvertureServiceAllocateConnectionOnInterconnect AllocateConnectionOnInterconnectXAmzTargetEnum = "OvertureService.AllocateConnectionOnInterconnect"
)

func (e AllocateConnectionOnInterconnectXAmzTargetEnum) ToPointer() *AllocateConnectionOnInterconnectXAmzTargetEnum {
	return &e
}

func (e *AllocateConnectionOnInterconnectXAmzTargetEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "OvertureService.AllocateConnectionOnInterconnect":
		*e = AllocateConnectionOnInterconnectXAmzTargetEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for AllocateConnectionOnInterconnectXAmzTargetEnum: %v", v)
	}
}

type AllocateConnectionOnInterconnectRequest struct {
	AllocateConnectionOnInterconnectRequest shared.AllocateConnectionOnInterconnectRequest `request:"mediaType=application/json"`
	XAmzAlgorithm                           *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256                       *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential                          *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate                                *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken                       *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature                           *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders                       *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget                              AllocateConnectionOnInterconnectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AllocateConnectionOnInterconnectResponse struct {
	// Success
	Connection  *shared.Connection
	ContentType string
	// DirectConnectClientException
	DirectConnectClientException interface{}
	// DirectConnectServerException
	DirectConnectServerException interface{}
	StatusCode                   int
	RawResponse                  *http.Response
}
