package shared

// CostCategoryProcessingStatus
// The list of processing statuses for Cost Management products for a specific cost category.
type CostCategoryProcessingStatus struct {
	Component *CostCategoryStatusComponentEnum `json:"Component,omitempty"`
	Status    *CostCategoryStatusEnum          `json:"Status,omitempty"`
}
