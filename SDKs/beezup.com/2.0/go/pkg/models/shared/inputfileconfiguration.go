package shared

// InputFileConfiguration
// Describe how to get and read a file
type InputFileConfiguration struct {
	Fetch      InputFileFetchConfiguration `json:"fetch"`
	FileNumber int32                       `json:"fileNumber"`
	Read       InputFileReadConfiguration  `json:"read"`
}
