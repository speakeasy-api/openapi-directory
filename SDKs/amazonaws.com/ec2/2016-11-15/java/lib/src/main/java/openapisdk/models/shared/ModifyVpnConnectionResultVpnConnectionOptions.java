package openapisdk.models.shared;



/**
 * ModifyVpnConnectionResultVpnConnectionOptions
 * The VPN connection options.
**/
public class ModifyVpnConnectionResultVpnConnectionOptions {
    public java.util.Map<String, Object> enableAcceleration;
    public ModifyVpnConnectionResultVpnConnectionOptions withEnableAcceleration(java.util.Map<String, Object> enableAcceleration) {
        this.enableAcceleration = enableAcceleration;
        return this;
    }
    public java.util.Map<String, Object> localIpv4NetworkCidr;
    public ModifyVpnConnectionResultVpnConnectionOptions withLocalIpv4NetworkCidr(java.util.Map<String, Object> localIpv4NetworkCidr) {
        this.localIpv4NetworkCidr = localIpv4NetworkCidr;
        return this;
    }
    public java.util.Map<String, Object> localIpv6NetworkCidr;
    public ModifyVpnConnectionResultVpnConnectionOptions withLocalIpv6NetworkCidr(java.util.Map<String, Object> localIpv6NetworkCidr) {
        this.localIpv6NetworkCidr = localIpv6NetworkCidr;
        return this;
    }
    public java.util.Map<String, Object> remoteIpv4NetworkCidr;
    public ModifyVpnConnectionResultVpnConnectionOptions withRemoteIpv4NetworkCidr(java.util.Map<String, Object> remoteIpv4NetworkCidr) {
        this.remoteIpv4NetworkCidr = remoteIpv4NetworkCidr;
        return this;
    }
    public java.util.Map<String, Object> remoteIpv6NetworkCidr;
    public ModifyVpnConnectionResultVpnConnectionOptions withRemoteIpv6NetworkCidr(java.util.Map<String, Object> remoteIpv6NetworkCidr) {
        this.remoteIpv6NetworkCidr = remoteIpv6NetworkCidr;
        return this;
    }
    public java.util.Map<String, Object> staticRoutesOnly;
    public ModifyVpnConnectionResultVpnConnectionOptions withStaticRoutesOnly(java.util.Map<String, Object> staticRoutesOnly) {
        this.staticRoutesOnly = staticRoutesOnly;
        return this;
    }
    public java.util.Map<String, Object> tunnelInsideIpVersion;
    public ModifyVpnConnectionResultVpnConnectionOptions withTunnelInsideIpVersion(java.util.Map<String, Object> tunnelInsideIpVersion) {
        this.tunnelInsideIpVersion = tunnelInsideIpVersion;
        return this;
    }
    public java.util.Map<String, Object> tunnelOptions;
    public ModifyVpnConnectionResultVpnConnectionOptions withTunnelOptions(java.util.Map<String, Object> tunnelOptions) {
        this.tunnelOptions = tunnelOptions;
        return this;
    }
}