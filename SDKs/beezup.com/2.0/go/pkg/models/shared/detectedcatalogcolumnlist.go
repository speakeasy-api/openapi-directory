package shared

// DetectedCatalogColumnList
// The list of detected catalog column
type DetectedCatalogColumnList struct {
	DetectedCatalogColumns []DetectedCatalogColumn        `json:"detectedCatalogColumns,omitempty"`
	Links                  DetectedCatalogColumnListLinks `json:"links"`
}
