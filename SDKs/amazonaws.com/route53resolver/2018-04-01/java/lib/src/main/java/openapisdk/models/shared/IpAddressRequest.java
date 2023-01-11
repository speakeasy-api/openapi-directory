package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpAddressRequest
 * In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.
**/
public class IpAddressRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ip")
    public String ip;
    public IpAddressRequest withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonProperty("SubnetId")
    public String subnetId;
    public IpAddressRequest withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}