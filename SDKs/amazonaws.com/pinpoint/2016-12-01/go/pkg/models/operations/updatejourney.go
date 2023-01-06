package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateJourneyPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
	JourneyID     string `pathParam:"style=simple,explode=false,name=journey-id"`
}

type UpdateJourneyHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// UpdateJourneyRequestBodyWriteJourneyRequestQuietTime
// Specifies the start and end times that define a time range when messages aren't sent to endpoints.
type UpdateJourneyRequestBodyWriteJourneyRequestQuietTime struct {
	End   *string `json:"End,omitempty"`
	Start *string `json:"Start,omitempty"`
}

// UpdateJourneyRequestBodyWriteJourneyRequest
// Specifies the configuration and other settings for a journey.
type UpdateJourneyRequestBodyWriteJourneyRequest struct {
	Activities             map[string]shared.Activity1                           `json:"Activities,omitempty"`
	CreationDate           *string                                               `json:"CreationDate,omitempty"`
	LastModifiedDate       *string                                               `json:"LastModifiedDate,omitempty"`
	Limits                 *shared.JourneyLimits                                 `json:"Limits,omitempty"`
	LocalTime              *bool                                                 `json:"LocalTime,omitempty"`
	Name                   *string                                               `json:"Name,omitempty"`
	QuietTime              *UpdateJourneyRequestBodyWriteJourneyRequestQuietTime `json:"QuietTime,omitempty"`
	RefreshFrequency       *string                                               `json:"RefreshFrequency,omitempty"`
	RefreshOnSegmentUpdate *bool                                                 `json:"RefreshOnSegmentUpdate,omitempty"`
	Schedule               *shared.JourneySchedule                               `json:"Schedule,omitempty"`
	StartActivity          *string                                               `json:"StartActivity,omitempty"`
	StartCondition         *shared.StartCondition                                `json:"StartCondition,omitempty"`
	State                  *shared.StateEnum                                     `json:"State,omitempty"`
	WaitForQuietTime       *bool                                                 `json:"WaitForQuietTime,omitempty"`
}

type UpdateJourneyRequestBody struct {
	WriteJourneyRequest UpdateJourneyRequestBodyWriteJourneyRequest `json:"WriteJourneyRequest"`
}

type UpdateJourneyRequest struct {
	PathParams UpdateJourneyPathParams
	Headers    UpdateJourneyHeaders
	Request    UpdateJourneyRequestBody `request:"mediaType=application/json"`
}

type UpdateJourneyResponse struct {
	BadRequestException          *interface{}
	ConflictException            *interface{}
	ContentType                  string
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UpdateJourneyResponse        *shared.UpdateJourneyResponse
}
