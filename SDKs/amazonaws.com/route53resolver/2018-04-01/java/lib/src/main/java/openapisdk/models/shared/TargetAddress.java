package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TargetAddress
 * In a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a> request, an array of the IPs that you want to forward DNS queries to.
**/
public class TargetAddress {
    @JsonProperty("Ip")
    public String ip;
    public TargetAddress withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Port")
    public Long port;
    public TargetAddress withPort(Long port) {
        this.port = port;
        return this;
    }
}