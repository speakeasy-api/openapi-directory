package shared

type LinksPercentiles struct {
	Domain      string                 `json:"domain"`
	Percentiles []LinksPercentilesItem `json:"percentiles"`
}
