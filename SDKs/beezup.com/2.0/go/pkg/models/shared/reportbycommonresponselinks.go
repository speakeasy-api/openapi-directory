package shared

type ReportByCommonResponseLinks struct {
	DisableAllProducts *LinksOptimiseAllLink `json:"disableAllProducts,omitempty"`
	DisableProducts    *LinksOptimiseLink    `json:"disableProducts,omitempty"`
	EnableAllProducts  *LinksOptimiseAllLink `json:"enableAllProducts,omitempty"`
	EnableProducts     *LinksOptimiseLink    `json:"enableProducts,omitempty"`
}
