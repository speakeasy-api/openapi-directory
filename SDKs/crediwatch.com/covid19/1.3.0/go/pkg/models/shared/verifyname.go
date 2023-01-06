package shared

type VerifyName struct {
	Data []VerifyNameData `json:"data"`
	Meta VerifyNameMeta   `json:"meta"`
}
