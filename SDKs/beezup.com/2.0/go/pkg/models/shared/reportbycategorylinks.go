package shared

type ReportByCategoryLinks struct {
	DisableProducts *LinksOptimiseByCategoryLink `json:"disableProducts,omitempty"`
	EnableProducts  *LinksOptimiseByCategoryLink `json:"enableProducts,omitempty"`
}
