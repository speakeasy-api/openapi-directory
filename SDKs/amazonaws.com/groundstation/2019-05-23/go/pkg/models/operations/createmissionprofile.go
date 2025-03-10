// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

// CreateMissionProfileRequestBodyStreamsKmsKey - AWS Key Management Service (KMS) Key.
type CreateMissionProfileRequestBodyStreamsKmsKey struct {
	KmsAliasArn *string `json:"kmsAliasArn,omitempty"`
	KmsKeyArn   *string `json:"kmsKeyArn,omitempty"`
}

type CreateMissionProfileRequestBody struct {
	// Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.
	ContactPostPassDurationSeconds *int64 `json:"contactPostPassDurationSeconds,omitempty"`
	// Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.
	ContactPrePassDurationSeconds *int64 `json:"contactPrePassDurationSeconds,omitempty"`
	// A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.
	DataflowEdges [][]string `json:"dataflowEdges"`
	// Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
	MinimumViableContactDurationSeconds int64 `json:"minimumViableContactDurationSeconds"`
	// Name of a mission profile.
	Name string `json:"name"`
	// AWS Key Management Service (KMS) Key.
	StreamsKmsKey *CreateMissionProfileRequestBodyStreamsKmsKey `json:"streamsKmsKey,omitempty"`
	// Role to use for encrypting streams with KMS key.
	StreamsKmsRole *string `json:"streamsKmsRole,omitempty"`
	// Tags assigned to a mission profile.
	Tags map[string]string `json:"tags,omitempty"`
	// ARN of a tracking <code>Config</code>.
	TrackingConfigArn string `json:"trackingConfigArn"`
}

type CreateMissionProfileRequest struct {
	RequestBody       CreateMissionProfileRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateMissionProfileResponse struct {
	ContentType string
	// DependencyException
	DependencyException interface{}
	// InvalidParameterException
	InvalidParameterException interface{}
	// Success
	MissionProfileIDResponse *shared.MissionProfileIDResponse
	StatusCode               int
	RawResponse              *http.Response
	// ResourceNotFoundException
	ResourceNotFoundException interface{}
}
