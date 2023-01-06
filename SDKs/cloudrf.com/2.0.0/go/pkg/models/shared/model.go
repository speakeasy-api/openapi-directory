package shared

type Model struct {
	Cli *int32 `json:"cli,omitempty"`
	Ked *int64 `json:"ked,omitempty"`
	Pe  *int32 `json:"pe,omitempty"`
	Pm  *int32 `json:"pm,omitempty"`
	Rel *int32 `json:"rel,omitempty"`
	Ter *int32 `json:"ter,omitempty"`
}
