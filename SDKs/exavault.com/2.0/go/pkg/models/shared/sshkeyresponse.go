package shared

type SSHKeyResponse struct {
	Data           *SSHKey `json:"data,omitempty"`
	Included       []User  `json:"included,omitempty"`
	ResponseStatus *int64  `json:"responseStatus,omitempty"`
}
