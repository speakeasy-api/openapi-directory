package shared

type InterfaceDescriptor struct {
	DstIPAddress  *string
	DstMACAddress *string
	InterfaceType InterfaceTypeEnum
	SrcMACAddress *string
	TunnelInfo    *TunnelInfo
}
