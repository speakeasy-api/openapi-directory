package shared

// NodeConfigurationOptionList
// A list of node configurations.
type NodeConfigurationOptionList struct {
	EstimatedDiskUtilizationPercent *float64
	Mode                            *ModeEnum
	NodeType                        *string
	NumberOfNodes                   *int64
}
