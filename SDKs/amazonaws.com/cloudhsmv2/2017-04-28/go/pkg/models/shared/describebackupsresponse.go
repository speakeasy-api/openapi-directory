package shared

type DescribeBackupsResponse struct {
	Backups   []Backup1 `json:"Backups,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
