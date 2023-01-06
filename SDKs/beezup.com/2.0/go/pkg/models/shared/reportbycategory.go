package shared

type ReportByCategory struct {
	AllProductCount      int64                 `json:"allProductCount"`
	CatalogCategoryID    string                `json:"catalogCategoryId"`
	CatalogCategoryPath  []string              `json:"catalogCategoryPath,omitempty"`
	CatalogProductCount  int64                 `json:"catalogProductCount"`
	ClickCount           int64                 `json:"clickCount"`
	Cost                 float64               `json:"cost"`
	EnabledProductCount  int64                 `json:"enabledProductCount"`
	Links                ReportByCategoryLinks `json:"links"`
	Margin               *float64              `json:"margin,omitempty"`
	OrderCount           int64                 `json:"orderCount"`
	PerformanceIndicator float64               `json:"performanceIndicator"`
	Roi                  *float64              `json:"roi,omitempty"`
	SoldProductCount     int64                 `json:"soldProductCount"`
	TotalSales           float64               `json:"totalSales"`
}
