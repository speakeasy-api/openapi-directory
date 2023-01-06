package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashStreamingSessionURLHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// GetDashStreamingSessionURLRequestBodyDashFragmentSelector
// Contains the range of timestamps for the requested media, and the source of the timestamps.
type GetDashStreamingSessionURLRequestBodyDashFragmentSelector struct {
	FragmentSelectorType *shared.DashFragmentSelectorTypeEnum `json:"FragmentSelectorType,omitempty"`
	TimestampRange       *shared.DashTimestampRange           `json:"TimestampRange,omitempty"`
}

type GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum string

const (
	GetDASHStreamingSessionURLRequestBodyDisplayFragmentNumberEnumAlways GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum = "ALWAYS"
	GetDASHStreamingSessionURLRequestBodyDisplayFragmentNumberEnumNever  GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum = "NEVER"
)

type GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum string

const (
	GetDASHStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumAlways GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "ALWAYS"
	GetDASHStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumNever  GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "NEVER"
)

type GetDashStreamingSessionURLRequestBodyPlaybackModeEnum string

const (
	GetDASHStreamingSessionURLRequestBodyPlaybackModeEnumLive       GetDashStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE"
	GetDASHStreamingSessionURLRequestBodyPlaybackModeEnumLiveReplay GetDashStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE_REPLAY"
	GetDASHStreamingSessionURLRequestBodyPlaybackModeEnumOnDemand   GetDashStreamingSessionURLRequestBodyPlaybackModeEnum = "ON_DEMAND"
)

type GetDashStreamingSessionURLRequestBody struct {
	DASHFragmentSelector       *GetDashStreamingSessionURLRequestBodyDashFragmentSelector         `json:"DASHFragmentSelector,omitempty"`
	DisplayFragmentNumber      *GetDashStreamingSessionURLRequestBodyDisplayFragmentNumberEnum    `json:"DisplayFragmentNumber,omitempty"`
	DisplayFragmentTimestamp   *GetDashStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum `json:"DisplayFragmentTimestamp,omitempty"`
	Expires                    *int64                                                             `json:"Expires,omitempty"`
	MaxManifestFragmentResults *int64                                                             `json:"MaxManifestFragmentResults,omitempty"`
	PlaybackMode               *GetDashStreamingSessionURLRequestBodyPlaybackModeEnum             `json:"PlaybackMode,omitempty"`
	StreamARN                  *string                                                            `json:"StreamARN,omitempty"`
	StreamName                 *string                                                            `json:"StreamName,omitempty"`
}

type GetDashStreamingSessionURLRequest struct {
	Headers GetDashStreamingSessionURLHeaders
	Request GetDashStreamingSessionURLRequestBody `request:"mediaType=application/json"`
}

type GetDashStreamingSessionURLResponse struct {
	ClientLimitExceededException        *interface{}
	ContentType                         string
	GetDASHStreamingSessionURLOutput    *shared.GetDashStreamingSessionURLOutput
	InvalidArgumentException            *interface{}
	InvalidCodecPrivateDataException    *interface{}
	MissingCodecPrivateDataException    *interface{}
	NoDataRetentionException            *interface{}
	NotAuthorizedException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	UnsupportedStreamMediaTypeException *interface{}
}
