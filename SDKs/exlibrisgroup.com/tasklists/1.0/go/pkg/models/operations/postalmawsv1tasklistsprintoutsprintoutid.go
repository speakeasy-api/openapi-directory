package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlmawsV1TaskListsPrintoutsPrintoutIDPathParams struct {
	PrintoutID string `pathParam:"style=simple,explode=false,name=printout_id"`
}

type PostAlmawsV1TaskListsPrintoutsPrintoutIDQueryParams struct {
	Op string `queryParam:"style=form,explode=true,name=op"`
}

type PostAlmawsV1TaskListsPrintoutsPrintoutIDRequest struct {
	PathParams  PostAlmawsV1TaskListsPrintoutsPrintoutIDPathParams
	QueryParams PostAlmawsV1TaskListsPrintoutsPrintoutIDQueryParams
}

type PostAlmawsV1TaskListsPrintoutsPrintoutIDResponse struct {
	Body                                                                                                []byte
	ContentType                                                                                         string
	Headers                                                                                             map[string][]string
	StatusCode                                                                                          int64
	Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems *shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems
}
