package shared

// DuplicateProductValueConfiguration
// Describe how you want to manage the duplication of the product value
type DuplicateProductValueConfiguration struct {
	CompareOptions CompareOptionsEnum                `json:"compareOptions"`
	Strategy       DuplicateProductValueStrategyEnum `json:"strategy"`
}
