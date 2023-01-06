package shared

type SendSSHPublicKeyRequest struct {
	AvailabilityZone string `json:"AvailabilityZone"`
	InstanceID       string `json:"InstanceId"`
	InstanceOSUser   string `json:"InstanceOSUser"`
	SSHPublicKey     string `json:"SSHPublicKey"`
}
