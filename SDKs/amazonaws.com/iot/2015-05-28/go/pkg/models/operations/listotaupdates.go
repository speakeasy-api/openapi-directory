package operations

import (
	"openapi/pkg/models/shared"
)

type ListOtaUpdatesOtaUpdateStatusEnum string

const (
	ListOTAUpdatesOTAUpdateStatusEnumCreatePending    ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_PENDING"
	ListOTAUpdatesOTAUpdateStatusEnumCreateInProgress ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_IN_PROGRESS"
	ListOTAUpdatesOTAUpdateStatusEnumCreateComplete   ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_COMPLETE"
	ListOTAUpdatesOTAUpdateStatusEnumCreateFailed     ListOtaUpdatesOtaUpdateStatusEnum = "CREATE_FAILED"
)

type ListOtaUpdatesQueryParams struct {
	MaxResults      *int64                             `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken       *string                            `queryParam:"style=form,explode=true,name=nextToken"`
	OtaUpdateStatus *ListOtaUpdatesOtaUpdateStatusEnum `queryParam:"style=form,explode=true,name=otaUpdateStatus"`
}

type ListOtaUpdatesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListOtaUpdatesRequest struct {
	QueryParams ListOtaUpdatesQueryParams
	Headers     ListOtaUpdatesHeaders
}

type ListOtaUpdatesResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ListOTAUpdatesResponse      *shared.ListOtaUpdatesResponse
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
}
