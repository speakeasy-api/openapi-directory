package shared

type FileshareParam struct {
	FsIOPS float64 `json:"fsIOPS"`
	FsName string  `json:"fsName"`
	FsSize int64   `json:"fsSize"`
}
