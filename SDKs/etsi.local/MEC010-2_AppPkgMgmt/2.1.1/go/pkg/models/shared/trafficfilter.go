package shared

type TrafficFilter struct {
	DSCP             *int64
	DstAddress       []string
	DstPort          []string
	DstTunnelPort    []string
	Protocol         []string
	QCI              *int64
	SrcAddress       []string
	SrcPort          []string
	SrcTunnelAddress []string
	SrcTunnelPort    []string
	TC               *int64
	Tag              []string
	TgtTunnelAddress []string
}
