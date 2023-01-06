package shared

type VerifyPhone struct {
	Data PlaceCall      `json:"data"`
	Meta VerifyNameMeta `json:"meta"`
}
