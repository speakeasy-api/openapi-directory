package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2VpnConnectionOptionsDetails
 * VPN connection options.
**/
public class AwsEc2VpnConnectionOptionsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StaticRoutesOnly")
    public Boolean staticRoutesOnly;
    public AwsEc2VpnConnectionOptionsDetails withStaticRoutesOnly(Boolean staticRoutesOnly) {
        this.staticRoutesOnly = staticRoutesOnly;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TunnelOptions")
    public AwsEc2VpnConnectionOptionsTunnelOptionsDetails[] tunnelOptions;
    public AwsEc2VpnConnectionOptionsDetails withTunnelOptions(AwsEc2VpnConnectionOptionsTunnelOptionsDetails[] tunnelOptions) {
        this.tunnelOptions = tunnelOptions;
        return this;
    }
}