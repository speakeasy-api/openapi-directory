package shared

// ExclusionFilter
// The exclusion filter
type ExclusionFilter struct {
	ChannelColumnID string  `json:"channelColumnId"`
	Enabled         bool    `json:"enabled"`
	GroupID         string  `json:"groupId"`
	Name            string  `json:"name"`
	OperatorName    string  `json:"operatorName"`
	Position        int32   `json:"position"`
	PositionInGroup int32   `json:"positionInGroup"`
	Value           *string `json:"value,omitempty"`
}
