package operations

import (
	"openapi/pkg/models/shared"
)

type GetAlmawsV1TaskListsPrintoutsPrintoutIDPathParams struct {
	PrintoutID string `pathParam:"style=simple,explode=false,name=printout_id"`
}

type GetAlmawsV1TaskListsPrintoutsPrintoutIDRequest struct {
	PathParams GetAlmawsV1TaskListsPrintoutsPrintoutIDPathParams
}

type GetAlmawsV1TaskListsPrintoutsPrintoutIDResponse struct {
	Body                                                                                                []byte
	ContentType                                                                                         string
	Headers                                                                                             map[string][]string
	StatusCode                                                                                          int64
	Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems *shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems
}
