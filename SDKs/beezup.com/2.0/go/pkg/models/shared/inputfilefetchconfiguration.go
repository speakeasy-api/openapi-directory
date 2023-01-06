package shared

// InputFileFetchConfiguration
// Describe the way to download the file
type InputFileFetchConfiguration struct {
	CompressedRelativePath    *string                        `json:"compressedRelativePath,omitempty"`
	CompressionFormatStrategy *CompressionFormatStrategyEnum `json:"compressionFormatStrategy,omitempty"`
	Credential                *Credential                    `json:"credential,omitempty"`
	DownloadCatalogStrategy   DownloadCatalogStrategyEnum    `json:"downloadCatalogStrategy"`
	DownloadTimeout           *int32                         `json:"downloadTimeout,omitempty"`
	URI                       string                         `json:"uri"`
}
