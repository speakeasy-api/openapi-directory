package openapisdk.models.shared;



public class TunnelInfo {
    public String tunnelDstAddress;
    public TunnelInfo withTunnelDstAddress(String tunnelDstAddress) {
        this.tunnelDstAddress = tunnelDstAddress;
        return this;
    }
    public String tunnelSpecificData;
    public TunnelInfo withTunnelSpecificData(String tunnelSpecificData) {
        this.tunnelSpecificData = tunnelSpecificData;
        return this;
    }
    public String tunnelSrcAddress;
    public TunnelInfo withTunnelSrcAddress(String tunnelSrcAddress) {
        this.tunnelSrcAddress = tunnelSrcAddress;
        return this;
    }
    public TunnelTypeEnum tunnelType;
    public TunnelInfo withTunnelType(TunnelTypeEnum tunnelType) {
        this.tunnelType = tunnelType;
        return this;
    }
}