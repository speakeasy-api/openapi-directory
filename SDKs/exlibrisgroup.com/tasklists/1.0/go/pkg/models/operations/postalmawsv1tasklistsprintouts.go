package operations

import (
	"openapi/pkg/models/shared"
)

type PostAlmawsV1TaskListsPrintoutsQueryParams struct {
	Letter     *string `queryParam:"style=form,explode=true,name=letter"`
	Op         string  `queryParam:"style=form,explode=true,name=op"`
	PrinterID  *string `queryParam:"style=form,explode=true,name=printer_id"`
	PrintoutID *string `queryParam:"style=form,explode=true,name=printout_id"`
	Status     *string `queryParam:"style=form,explode=true,name=status"`
}

type PostAlmawsV1TaskListsPrintoutsRequest struct {
	QueryParams PostAlmawsV1TaskListsPrintoutsQueryParams
}

type PostAlmawsV1TaskListsPrintoutsResponse struct {
	Body                                                                         []byte
	ContentType                                                                  string
	Headers                                                                      map[string][]string
	StatusCode                                                                   int64
	Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema *shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema
}
