package operations

import (
	"time"
)

type GetAlmawsV1TaskListsPrintoutsQueryParams struct {
	Letter     *string `queryParam:"style=form,explode=true,name=letter"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset     *int64  `queryParam:"style=form,explode=true,name=offset"`
	PrinterID  *string `queryParam:"style=form,explode=true,name=printer_id"`
	PrintoutID *string `queryParam:"style=form,explode=true,name=printout_id"`
	Status     *string `queryParam:"style=form,explode=true,name=status"`
}

// GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter
// The printer.
type GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus
// Status of the printout (Pending/Printed/Canceled).
type GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout
// Printout Object.
type GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout struct {
	Date     *time.Time                                                      `json:"date,omitempty"`
	ID       *string                                                         `json:"id,omitempty"`
	Letter   *string                                                         `json:"letter,omitempty"`
	Link     *string                                                         `json:"link,omitempty"`
	Printer  *GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutPrinter `json:"printer,omitempty"`
	Printout *string                                                         `json:"printout,omitempty"`
	Size     *string                                                         `json:"size,omitempty"`
	Source   *string                                                         `json:"source,omitempty"`
	Status   *GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintoutStatus  `json:"status,omitempty"`
}

// GetAlmawsV1TaskListsPrintouts200ApplicationJSON
// A list of printouts.
type GetAlmawsV1TaskListsPrintouts200ApplicationJSON struct {
	Printout         []GetAlmawsV1TaskListsPrintouts200ApplicationJSONPrintout `json:"printout,omitempty"`
	TotalRecordCount *int32                                                    `json:"total_record_count,omitempty"`
}

type GetAlmawsV1TaskListsPrintoutsRequest struct {
	QueryParams GetAlmawsV1TaskListsPrintoutsQueryParams
}

type GetAlmawsV1TaskListsPrintoutsResponse struct {
	Body                                                  []byte
	ContentType                                           string
	Headers                                               map[string][]string
	StatusCode                                            int64
	GetAlmawsV1TaskListsPrintouts200ApplicationJSONObject *GetAlmawsV1TaskListsPrintouts200ApplicationJSON
}
