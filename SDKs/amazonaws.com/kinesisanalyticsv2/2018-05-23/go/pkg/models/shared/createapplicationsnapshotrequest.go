package shared

type CreateApplicationSnapshotRequest struct {
	ApplicationName map[string]interface{} `json:"ApplicationName"`
	SnapshotName    string                 `json:"SnapshotName"`
}
