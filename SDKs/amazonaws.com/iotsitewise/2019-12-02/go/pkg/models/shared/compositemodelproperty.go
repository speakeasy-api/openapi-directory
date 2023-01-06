package shared

// CompositeModelProperty
// Contains information about a composite model property on an asset.
type CompositeModelProperty struct {
	AssetProperty Property1 `json:"assetProperty"`
	Name          string    `json:"name"`
	Type          string    `json:"type"`
}
