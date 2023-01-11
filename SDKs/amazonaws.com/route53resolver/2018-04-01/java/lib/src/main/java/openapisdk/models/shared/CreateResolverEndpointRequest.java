package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateResolverEndpointRequest {
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public CreateResolverEndpointRequest withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonProperty("Direction")
    public ResolverEndpointDirectionEnum direction;
    public CreateResolverEndpointRequest withDirection(ResolverEndpointDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonProperty("IpAddresses")
    public IpAddressRequest[] ipAddresses;
    public CreateResolverEndpointRequest withIpAddresses(IpAddressRequest[] ipAddresses) {
        this.ipAddresses = ipAddresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CreateResolverEndpointRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public CreateResolverEndpointRequest withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateResolverEndpointRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}