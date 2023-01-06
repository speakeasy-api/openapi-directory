package shared

// SourceSchema1
// For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
type SourceSchema1 struct {
	RecordColumns  []RecordColumn `json:"RecordColumns"`
	RecordEncoding *string        `json:"RecordEncoding,omitempty"`
	RecordFormat   RecordFormat1  `json:"RecordFormat"`
}
