package shared

type OutputUnitsEnum string

const (
	OutputUnitsEnumMetric   OutputUnitsEnum = "metric"
	OutputUnitsEnumImperial OutputUnitsEnum = "imperial"
)

type Output struct {
	Ber   *int32           `json:"ber,omitempty"`
	Col   *string          `json:"col,omitempty"`
	Mod   *int32           `json:"mod,omitempty"`
	Nf    *int32           `json:"nf,omitempty"`
	Out   *int32           `json:"out,omitempty"`
	Rad   *float32         `json:"rad,omitempty"`
	Res   *int32           `json:"res,omitempty"`
	Units *OutputUnitsEnum `json:"units,omitempty"`
}
