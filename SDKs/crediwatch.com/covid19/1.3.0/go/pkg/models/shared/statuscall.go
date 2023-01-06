package shared

type StatusCall struct {
	Data GetStatus      `json:"data"`
	Meta VerifyNameMeta `json:"meta"`
}
