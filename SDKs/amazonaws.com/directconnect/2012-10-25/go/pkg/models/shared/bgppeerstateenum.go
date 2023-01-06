package shared

type BgpPeerStateEnum string

const (
	BGPPeerStateEnumVerifying BgpPeerStateEnum = "verifying"
	BGPPeerStateEnumPending   BgpPeerStateEnum = "pending"
	BGPPeerStateEnumAvailable BgpPeerStateEnum = "available"
	BGPPeerStateEnumDeleting  BgpPeerStateEnum = "deleting"
	BGPPeerStateEnumDeleted   BgpPeerStateEnum = "deleted"
)
