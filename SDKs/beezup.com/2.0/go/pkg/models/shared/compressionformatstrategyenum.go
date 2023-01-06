package shared

type CompressionFormatStrategyEnum string

const (
	CompressionFormatStrategyEnumNone  CompressionFormatStrategyEnum = "None"
	CompressionFormatStrategyEnumZip   CompressionFormatStrategyEnum = "Zip"
	CompressionFormatStrategyEnumTarGz CompressionFormatStrategyEnum = "TarGz"
	CompressionFormatStrategyEnumGzip  CompressionFormatStrategyEnum = "Gzip"
	CompressionFormatStrategyEnumBzip2 CompressionFormatStrategyEnum = "Bzip2"
	CompressionFormatStrategyEnumRar   CompressionFormatStrategyEnum = "Rar"
)
