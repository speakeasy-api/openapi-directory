package shared

// RepositoryCatalogDataInput
// An object containing the catalog data for a repository. This data is publicly visible in the Amazon ECR Public Gallery.
type RepositoryCatalogDataInput struct {
	AboutText        map[string]interface{} `json:"aboutText,omitempty"`
	Architectures    []string               `json:"architectures,omitempty"`
	Description      *string                `json:"description,omitempty"`
	LogoImageBlob    *string                `json:"logoImageBlob,omitempty"`
	OperatingSystems map[string]interface{} `json:"operatingSystems,omitempty"`
	UsageText        *string                `json:"usageText,omitempty"`
}
