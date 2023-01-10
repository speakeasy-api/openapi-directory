package shared

type ReportByChannelLinks struct {
	DisableProducts *LinksOptimiseByChannelLink `json:"disableProducts,omitempty"`
	EnableProducts  *LinksOptimiseByChannelLink `json:"enableProducts,omitempty"`
}
