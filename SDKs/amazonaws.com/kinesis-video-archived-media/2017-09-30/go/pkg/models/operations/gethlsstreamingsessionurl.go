package operations

import (
	"openapi/pkg/models/shared"
)

type GetHlsStreamingSessionURLHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetHlsStreamingSessionURLRequestBodyContainerFormatEnum string

const (
	GetHLSStreamingSessionURLRequestBodyContainerFormatEnumFragmentedMp4 GetHlsStreamingSessionURLRequestBodyContainerFormatEnum = "FRAGMENTED_MP4"
	GetHLSStreamingSessionURLRequestBodyContainerFormatEnumMpegTs        GetHlsStreamingSessionURLRequestBodyContainerFormatEnum = "MPEG_TS"
)

type GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum string

const (
	GetHLSStreamingSessionURLRequestBodyDiscontinuityModeEnumAlways          GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum = "ALWAYS"
	GetHLSStreamingSessionURLRequestBodyDiscontinuityModeEnumNever           GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum = "NEVER"
	GetHLSStreamingSessionURLRequestBodyDiscontinuityModeEnumOnDiscontinuity GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum = "ON_DISCONTINUITY"
)

type GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum string

const (
	GetHLSStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumAlways GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "ALWAYS"
	GetHLSStreamingSessionURLRequestBodyDisplayFragmentTimestampEnumNever  GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum = "NEVER"
)

// GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector
// Contains the range of timestamps for the requested media, and the source of the timestamps.
type GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector struct {
	FragmentSelectorType *shared.HlsFragmentSelectorTypeEnum `json:"FragmentSelectorType,omitempty"`
	TimestampRange       *shared.HlsTimestampRange           `json:"TimestampRange,omitempty"`
}

type GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum string

const (
	GetHLSStreamingSessionURLRequestBodyPlaybackModeEnumLive       GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE"
	GetHLSStreamingSessionURLRequestBodyPlaybackModeEnumLiveReplay GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum = "LIVE_REPLAY"
	GetHLSStreamingSessionURLRequestBodyPlaybackModeEnumOnDemand   GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum = "ON_DEMAND"
)

type GetHlsStreamingSessionURLRequestBody struct {
	ContainerFormat                 *GetHlsStreamingSessionURLRequestBodyContainerFormatEnum          `json:"ContainerFormat,omitempty"`
	DiscontinuityMode               *GetHlsStreamingSessionURLRequestBodyDiscontinuityModeEnum        `json:"DiscontinuityMode,omitempty"`
	DisplayFragmentTimestamp        *GetHlsStreamingSessionURLRequestBodyDisplayFragmentTimestampEnum `json:"DisplayFragmentTimestamp,omitempty"`
	Expires                         *int64                                                            `json:"Expires,omitempty"`
	HLSFragmentSelector             *GetHlsStreamingSessionURLRequestBodyHlsFragmentSelector          `json:"HLSFragmentSelector,omitempty"`
	MaxMediaPlaylistFragmentResults *int64                                                            `json:"MaxMediaPlaylistFragmentResults,omitempty"`
	PlaybackMode                    *GetHlsStreamingSessionURLRequestBodyPlaybackModeEnum             `json:"PlaybackMode,omitempty"`
	StreamARN                       *string                                                           `json:"StreamARN,omitempty"`
	StreamName                      *string                                                           `json:"StreamName,omitempty"`
}

type GetHlsStreamingSessionURLRequest struct {
	Headers GetHlsStreamingSessionURLHeaders
	Request GetHlsStreamingSessionURLRequestBody `request:"mediaType=application/json"`
}

type GetHlsStreamingSessionURLResponse struct {
	ClientLimitExceededException        *interface{}
	ContentType                         string
	GetHLSStreamingSessionURLOutput     *shared.GetHlsStreamingSessionURLOutput
	InvalidArgumentException            *interface{}
	InvalidCodecPrivateDataException    *interface{}
	MissingCodecPrivateDataException    *interface{}
	NoDataRetentionException            *interface{}
	NotAuthorizedException              *interface{}
	ResourceNotFoundException           *interface{}
	StatusCode                          int64
	UnsupportedStreamMediaTypeException *interface{}
}
