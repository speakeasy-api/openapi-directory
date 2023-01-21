package shared

// Coverage
// The amount of instance usage that a reservation covered.
type Coverage struct {
	CoverageCost            *CoverageCost            `json:"CoverageCost,omitempty"`
	CoverageHours           *CoverageHours           `json:"CoverageHours,omitempty"`
	CoverageNormalizedUnits *CoverageNormalizedUnits `json:"CoverageNormalizedUnits,omitempty"`
}
