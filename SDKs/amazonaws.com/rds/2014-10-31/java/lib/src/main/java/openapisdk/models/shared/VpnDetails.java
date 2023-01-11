package openapisdk.models.shared;



/**
 * VpnDetails
 * <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the Amazon Web Services website.</p> <p>For more information about RDS on VMware, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html"> RDS on VMware User Guide.</a> </p>
**/
public class VpnDetails {
    public String vpnGatewayIp;
    public VpnDetails withVpnGatewayIp(String vpnGatewayIp) {
        this.vpnGatewayIp = vpnGatewayIp;
        return this;
    }
    public String vpnId;
    public VpnDetails withVpnId(String vpnId) {
        this.vpnId = vpnId;
        return this;
    }
    public String vpnName;
    public VpnDetails withVpnName(String vpnName) {
        this.vpnName = vpnName;
        return this;
    }
    public String vpnPSK;
    public VpnDetails withVpnPsk(String vpnPSK) {
        this.vpnPSK = vpnPSK;
        return this;
    }
    public String vpnState;
    public VpnDetails withVpnState(String vpnState) {
        this.vpnState = vpnState;
        return this;
    }
    public String vpnTunnelOriginatorIP;
    public VpnDetails withVpnTunnelOriginatorIp(String vpnTunnelOriginatorIP) {
        this.vpnTunnelOriginatorIP = vpnTunnelOriginatorIP;
        return this;
    }
}