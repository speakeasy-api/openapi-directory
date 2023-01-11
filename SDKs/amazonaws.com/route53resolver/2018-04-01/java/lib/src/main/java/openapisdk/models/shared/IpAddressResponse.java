package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpAddressResponse
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
**/
public class IpAddressResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTime")
    public String creationTime;
    public IpAddressResponse withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ip")
    public String ip;
    public IpAddressResponse withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpId")
    public String ipId;
    public IpAddressResponse withIpId(String ipId) {
        this.ipId = ipId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModificationTime")
    public String modificationTime;
    public IpAddressResponse withModificationTime(String modificationTime) {
        this.modificationTime = modificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public IpAddressStatusEnum status;
    public IpAddressResponse withStatus(IpAddressStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public IpAddressResponse withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetId")
    public String subnetId;
    public IpAddressResponse withSubnetId(String subnetId) {
        this.subnetId = subnetId;
        return this;
    }
}