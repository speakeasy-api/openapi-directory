package shared

type BgpStatusEnum string

const (
	BGPStatusEnumUp      BgpStatusEnum = "up"
	BGPStatusEnumDown    BgpStatusEnum = "down"
	BGPStatusEnumUnknown BgpStatusEnum = "unknown"
)
