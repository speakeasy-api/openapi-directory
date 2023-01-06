package shared

// InputFileReadXMLConfiguration
// The XML file description
type InputFileReadXMLConfiguration struct {
	FlattenXMLChildElements bool `json:"flattenXmlChildElements"`
	UseXMLAttributes        bool `json:"useXmlAttributes"`
}
