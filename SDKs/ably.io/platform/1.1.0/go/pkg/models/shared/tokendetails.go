package shared

type TokenDetails struct {
	Capability *string `json:"capability,omitempty"`
	Expires    *int64  `json:"expires,omitempty"`
	Issued     *int64  `json:"issued,omitempty"`
	KeyName    *string `json:"keyName,omitempty"`
	Token      *string `json:"token,omitempty"`
}
