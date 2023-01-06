package shared

type GetDisksResult struct {
	Disks         []Disk                 `json:"disks,omitempty"`
	NextPageToken map[string]interface{} `json:"nextPageToken,omitempty"`
}
