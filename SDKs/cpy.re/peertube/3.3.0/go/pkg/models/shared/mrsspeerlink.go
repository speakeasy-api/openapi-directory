package shared

type MrssPeerLinkTypeEnum string

const (
	MRSSPeerLinkTypeEnumApplicationXBittorrent MrssPeerLinkTypeEnum = "application/x-bittorrent"
)

type MrssPeerLink struct {
	Href *string
	Type *MrssPeerLinkTypeEnum
}
