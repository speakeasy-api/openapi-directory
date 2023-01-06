package shared

type ReturningProduction struct {
	Conference          *string  `json:"conference,omitempty"`
	PassingUsage        *float64 `json:"passingUsage,omitempty"`
	PercentPPA          *float64 `json:"percentPPA,omitempty"`
	PercentPassingPPA   *float64 `json:"percentPassingPPA,omitempty"`
	PercentReceivingPPA *float64 `json:"percentReceivingPPA,omitempty"`
	PercentRushingPPA   *float64 `json:"percentRushingPPA,omitempty"`
	ReceivingUsage      *float64 `json:"receivingUsage,omitempty"`
	RushingUsage        *float64 `json:"rushingUsage,omitempty"`
	Season              *int64   `json:"season,omitempty"`
	Team                *string  `json:"team,omitempty"`
	TotalPPA            *float64 `json:"totalPPA,omitempty"`
	TotalPassingPPA     *float64 `json:"totalPassingPPA,omitempty"`
	TotalReceivingPPA   *float64 `json:"totalReceivingPPA,omitempty"`
	TotalRushingPPA     *float64 `json:"totalRushingPPA,omitempty"`
	Usage               *float64 `json:"usage,omitempty"`
}
