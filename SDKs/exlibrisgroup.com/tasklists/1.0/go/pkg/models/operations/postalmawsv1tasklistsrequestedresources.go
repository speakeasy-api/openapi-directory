package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlmawsV1TaskListsRequestedResourcesQueryParams struct {
	CircDesk   *string `queryParam:"style=form,explode=true,name=circ_desk"`
	Library    *string `queryParam:"style=form,explode=true,name=library"`
	Location   *string `queryParam:"style=form,explode=true,name=location"`
	Op         *string `queryParam:"style=form,explode=true,name=op"`
	PickupInst *string `queryParam:"style=form,explode=true,name=pickup_inst"`
	Printed    *string `queryParam:"style=form,explode=true,name=printed"`
	Reported   *string `queryParam:"style=form,explode=true,name=reported"`
}

type PostAlmawsV1TaskListsRequestedResourcesRequest struct {
	QueryParams PostAlmawsV1TaskListsRequestedResourcesQueryParams
}

type PostAlmawsV1TaskListsRequestedResourcesResponse struct {
	Body                                                                                  []byte
	ContentType                                                                           string
	Headers                                                                               map[string][]string
	StatusCode                                                                            int64
	Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema *shared.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema
}
