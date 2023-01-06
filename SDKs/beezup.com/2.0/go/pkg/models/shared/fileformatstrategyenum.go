package shared

type FileFormatStrategyEnum string

const (
	FileFormatStrategyEnumUnknown FileFormatStrategyEnum = "Unknown"
	FileFormatStrategyEnumCsv     FileFormatStrategyEnum = "Csv"
	FileFormatStrategyEnumXML     FileFormatStrategyEnum = "Xml"
	FileFormatStrategyEnumJSON    FileFormatStrategyEnum = "Json"
)
