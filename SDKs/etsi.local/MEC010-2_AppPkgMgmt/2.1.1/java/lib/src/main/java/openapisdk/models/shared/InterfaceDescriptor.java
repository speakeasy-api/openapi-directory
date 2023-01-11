package openapisdk.models.shared;



public class InterfaceDescriptor {
    public String dstIPAddress;
    public InterfaceDescriptor withDstIpAddress(String dstIPAddress) {
        this.dstIPAddress = dstIPAddress;
        return this;
    }
    public String dstMACAddress;
    public InterfaceDescriptor withDstMacAddress(String dstMACAddress) {
        this.dstMACAddress = dstMACAddress;
        return this;
    }
    public InterfaceTypeEnum interfaceType;
    public InterfaceDescriptor withInterfaceType(InterfaceTypeEnum interfaceType) {
        this.interfaceType = interfaceType;
        return this;
    }
    public String srcMACAddress;
    public InterfaceDescriptor withSrcMacAddress(String srcMACAddress) {
        this.srcMACAddress = srcMACAddress;
        return this;
    }
    public TunnelInfo tunnelInfo;
    public InterfaceDescriptor withTunnelInfo(TunnelInfo tunnelInfo) {
        this.tunnelInfo = tunnelInfo;
        return this;
    }
}