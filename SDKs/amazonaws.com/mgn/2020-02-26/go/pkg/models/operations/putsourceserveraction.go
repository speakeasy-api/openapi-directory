// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

// PutSourceServerActionRequestBodyCategoryEnum - Source server post migration custom action category.
type PutSourceServerActionRequestBodyCategoryEnum string

const (
	PutSourceServerActionRequestBodyCategoryEnumDisasterRecovery       PutSourceServerActionRequestBodyCategoryEnum = "DISASTER_RECOVERY"
	PutSourceServerActionRequestBodyCategoryEnumOperatingSystem        PutSourceServerActionRequestBodyCategoryEnum = "OPERATING_SYSTEM"
	PutSourceServerActionRequestBodyCategoryEnumLicenseAndSubscription PutSourceServerActionRequestBodyCategoryEnum = "LICENSE_AND_SUBSCRIPTION"
	PutSourceServerActionRequestBodyCategoryEnumValidation             PutSourceServerActionRequestBodyCategoryEnum = "VALIDATION"
	PutSourceServerActionRequestBodyCategoryEnumObservability          PutSourceServerActionRequestBodyCategoryEnum = "OBSERVABILITY"
	PutSourceServerActionRequestBodyCategoryEnumSecurity               PutSourceServerActionRequestBodyCategoryEnum = "SECURITY"
	PutSourceServerActionRequestBodyCategoryEnumNetworking             PutSourceServerActionRequestBodyCategoryEnum = "NETWORKING"
	PutSourceServerActionRequestBodyCategoryEnumConfiguration          PutSourceServerActionRequestBodyCategoryEnum = "CONFIGURATION"
	PutSourceServerActionRequestBodyCategoryEnumBackup                 PutSourceServerActionRequestBodyCategoryEnum = "BACKUP"
	PutSourceServerActionRequestBodyCategoryEnumOther                  PutSourceServerActionRequestBodyCategoryEnum = "OTHER"
)

func (e PutSourceServerActionRequestBodyCategoryEnum) ToPointer() *PutSourceServerActionRequestBodyCategoryEnum {
	return &e
}

func (e *PutSourceServerActionRequestBodyCategoryEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "DISASTER_RECOVERY":
		fallthrough
	case "OPERATING_SYSTEM":
		fallthrough
	case "LICENSE_AND_SUBSCRIPTION":
		fallthrough
	case "VALIDATION":
		fallthrough
	case "OBSERVABILITY":
		fallthrough
	case "SECURITY":
		fallthrough
	case "NETWORKING":
		fallthrough
	case "CONFIGURATION":
		fallthrough
	case "BACKUP":
		fallthrough
	case "OTHER":
		*e = PutSourceServerActionRequestBodyCategoryEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PutSourceServerActionRequestBodyCategoryEnum: %v", v)
	}
}

type PutSourceServerActionRequestBody struct {
	// Source server post migration custom action ID.
	ActionID string `json:"actionID"`
	// Source server post migration custom action name.
	ActionName string `json:"actionName"`
	// Source server post migration custom action active status.
	Active *bool `json:"active,omitempty"`
	// Source server post migration custom action category.
	Category *PutSourceServerActionRequestBodyCategoryEnum `json:"category,omitempty"`
	// Source server post migration custom action description.
	Description *string `json:"description,omitempty"`
	// Source server post migration custom action document identifier.
	DocumentIdentifier string `json:"documentIdentifier"`
	// Source server post migration custom action document version.
	DocumentVersion *string `json:"documentVersion,omitempty"`
	// Source server post migration custom action external parameters.
	ExternalParameters map[string]shared.SsmExternalParameter `json:"externalParameters,omitempty"`
	// Source server post migration custom action must succeed for cutover.
	MustSucceedForCutover *bool `json:"mustSucceedForCutover,omitempty"`
	// Source server post migration custom action order.
	Order int64 `json:"order"`
	// Source server post migration custom action parameters.
	Parameters map[string][]shared.SsmParameterStoreParameter `json:"parameters,omitempty"`
	// Source server ID.
	SourceServerID string `json:"sourceServerID"`
	// Source server post migration custom action timeout in seconds.
	TimeoutSeconds *int64 `json:"timeoutSeconds,omitempty"`
}

type PutSourceServerActionRequest struct {
	RequestBody       PutSourceServerActionRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutSourceServerActionResponse struct {
	// ConflictException
	ConflictException interface{}
	ContentType       string
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
	// Success
	SourceServerActionDocument *shared.SourceServerActionDocument
	StatusCode                 int
	RawResponse                *http.Response
	// UninitializedAccountException
	UninitializedAccountException interface{}
	// ValidationException
	ValidationException interface{}
}
