package shared

// InputFileReadCsvConfiguration
// The CSV file description
type InputFileReadCsvConfiguration struct {
	CsvSeparator       string  `json:"csvSeparator"`
	CsvTextQualifier   *string `json:"csvTextQualifier,omitempty"`
	HasHeaderRecord    bool    `json:"hasHeaderRecord"`
	IgnoreHeaderRecord bool    `json:"ignoreHeaderRecord"`
}
