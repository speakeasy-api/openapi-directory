package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlmawsV1TaskListsRsLendingRequestsQueryParams struct {
	Library         *string `queryParam:"style=form,explode=true,name=library"`
	Op              *string `queryParam:"style=form,explode=true,name=op"`
	Partner         *string `queryParam:"style=form,explode=true,name=partner"`
	Printed         *string `queryParam:"style=form,explode=true,name=printed"`
	Reported        *string `queryParam:"style=form,explode=true,name=reported"`
	RequestedFormat *string `queryParam:"style=form,explode=true,name=requested_format"`
	Status          *string `queryParam:"style=form,explode=true,name=status"`
	SuppliedFormat  *string `queryParam:"style=form,explode=true,name=supplied_format"`
}

type PostAlmawsV1TaskListsRsLendingRequestsRequest struct {
	QueryParams PostAlmawsV1TaskListsRsLendingRequestsQueryParams
}

type PostAlmawsV1TaskListsRsLendingRequestsResponse struct {
	Body                                                                                                                           []byte
	ContentType                                                                                                                    string
	Headers                                                                                                                        map[string][]string
	StatusCode                                                                                                                     int64
	Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems *shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems
}
