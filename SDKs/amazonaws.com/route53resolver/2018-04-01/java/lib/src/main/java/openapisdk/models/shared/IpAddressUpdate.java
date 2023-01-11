package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpAddressUpdate
 * In an <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, information about an IP address to update.
**/
public class IpAddressUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ip")
    public String ip;
    public IpAddressUpdate withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpId")
    public String ipId;
    public IpAddressUpdate withIpId(String ipId) {
        this.ipId = ipId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public IpAddressUpdate withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}