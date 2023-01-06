package shared

// InputFileReadConfiguration
// Describe how to read the file. If FileFormatStrategy is CSV, csvFileReadProperties is required. Otherwise the xmlFileReadProperties is required.
type InputFileReadConfiguration struct {
	CsvFileReadProperties *InputFileReadCsvConfiguration `json:"csvFileReadProperties,omitempty"`
	CultureName           *string                        `json:"cultureName,omitempty"`
	EncodingTypeName      *string                        `json:"encodingTypeName,omitempty"`
	Format                FileFormatStrategyEnum         `json:"format"`
	XMLFileReadProperties *InputFileReadXMLConfiguration `json:"xmlFileReadProperties,omitempty"`
}
