package shared

type DiscoverInputSchemaResponse struct {
	InputSchema           *SourceSchema          `json:"InputSchema,omitempty"`
	ParsedInputRecords    map[string]interface{} `json:"ParsedInputRecords,omitempty"`
	ProcessedInputRecords []string               `json:"ProcessedInputRecords,omitempty"`
	RawInputRecords       []string               `json:"RawInputRecords,omitempty"`
}
