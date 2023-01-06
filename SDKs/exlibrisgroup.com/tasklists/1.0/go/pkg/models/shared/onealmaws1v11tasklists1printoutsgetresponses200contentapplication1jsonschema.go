package shared

import (
	"time"
)

// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter
// The printer.
type Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus
// Status of the printout (Pending/Printed/Canceled).
type Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout
// Printout Object.
type Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout struct {
	Date     *time.Time                                                                                   `json:"date,omitempty"`
	ID       *string                                                                                      `json:"id,omitempty"`
	Letter   *string                                                                                      `json:"letter,omitempty"`
	Link     *string                                                                                      `json:"link,omitempty"`
	Printer  *Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutPrinter `json:"printer,omitempty"`
	Printout *string                                                                                      `json:"printout,omitempty"`
	Size     *string                                                                                      `json:"size,omitempty"`
	Source   *string                                                                                      `json:"source,omitempty"`
	Status   *Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintoutStatus  `json:"status,omitempty"`
}

// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema
// A list of printouts.
type Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema struct {
	Printout         []Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPrintout `json:"printout,omitempty"`
	TotalRecordCount *int32                                                                                 `json:"total_record_count,omitempty"`
}
