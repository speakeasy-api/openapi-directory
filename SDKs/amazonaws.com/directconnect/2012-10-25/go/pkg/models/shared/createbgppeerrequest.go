package shared

type CreateBgpPeerRequest struct {
	NewBGPPeer         *NewBgpPeer `json:"newBGPPeer,omitempty"`
	VirtualInterfaceID *string     `json:"virtualInterfaceId,omitempty"`
}
