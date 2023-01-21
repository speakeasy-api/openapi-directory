package shared

type FaqFileFormatEnum string

const (
	FaqFileFormatEnumCsv           FaqFileFormatEnum = "CSV"
	FaqFileFormatEnumCsvWithHeader FaqFileFormatEnum = "CSV_WITH_HEADER"
	FaqFileFormatEnumJSON          FaqFileFormatEnum = "JSON"
)
