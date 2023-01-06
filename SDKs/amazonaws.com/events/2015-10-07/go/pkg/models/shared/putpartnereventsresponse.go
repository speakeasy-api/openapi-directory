package shared

type PutPartnerEventsResponse struct {
	Entries          map[string]interface{} `json:"Entries,omitempty"`
	FailedEntryCount *int64                 `json:"FailedEntryCount,omitempty"`
}
