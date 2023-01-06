package shared

// RepositoryCatalogDataInput1
// An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
type RepositoryCatalogDataInput1 struct {
	AboutText        *string  `json:"aboutText,omitempty"`
	Architectures    []string `json:"architectures,omitempty"`
	Description      *string  `json:"description,omitempty"`
	LogoImageBlob    *string  `json:"logoImageBlob,omitempty"`
	OperatingSystems []string `json:"operatingSystems,omitempty"`
	UsageText        *string  `json:"usageText,omitempty"`
}
