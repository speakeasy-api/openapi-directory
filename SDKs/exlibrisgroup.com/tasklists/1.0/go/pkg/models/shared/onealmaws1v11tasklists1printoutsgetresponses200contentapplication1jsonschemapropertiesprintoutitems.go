package shared

import (
	"time"
)

// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsPrinter
// The printer.
type Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsPrinter struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsStatus
// Status of the printout (Pending/Printed/Canceled).
type Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsStatus struct {
	Desc  *string `json:"desc,omitempty"`
	Value *string `json:"value,omitempty"`
}

// Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems
// Printout Object.
type Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems struct {
	Date     *time.Time                                                                                                  `json:"date,omitempty"`
	ID       *string                                                                                                     `json:"id,omitempty"`
	Letter   *string                                                                                                     `json:"letter,omitempty"`
	Link     *string                                                                                                     `json:"link,omitempty"`
	Printer  *Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsPrinter `json:"printer,omitempty"`
	Printout *string                                                                                                     `json:"printout,omitempty"`
	Size     *string                                                                                                     `json:"size,omitempty"`
	Source   *string                                                                                                     `json:"source,omitempty"`
	Status   *Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItemsStatus  `json:"status,omitempty"`
}
