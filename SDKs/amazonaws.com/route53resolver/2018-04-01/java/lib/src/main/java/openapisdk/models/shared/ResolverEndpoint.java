package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolverEndpoint
 * In the response to a <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html">CreateResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DeleteResolverEndpoint.html">DeleteResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html">GetResolverEndpoint</a>, <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverEndpoints.html">ListResolverEndpoints</a>, or <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_UpdateResolverEndpoint.html">UpdateResolverEndpoint</a> request, a complex type that contains settings for an existing inbound or outbound Resolver endpoint.
**/
public class ResolverEndpoint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public ResolverEndpoint withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTime")
    public String creationTime;
    public ResolverEndpoint withCreationTime(String creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatorRequestId")
    public String creatorRequestId;
    public ResolverEndpoint withCreatorRequestId(String creatorRequestId) {
        this.creatorRequestId = creatorRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Direction")
    public ResolverEndpointDirectionEnum direction;
    public ResolverEndpoint withDirection(ResolverEndpointDirectionEnum direction) {
        this.direction = direction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostVPCId")
    public String hostVPCId;
    public ResolverEndpoint withHostVpcId(String hostVPCId) {
        this.hostVPCId = hostVPCId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public ResolverEndpoint withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IpAddressCount")
    public Long ipAddressCount;
    public ResolverEndpoint withIpAddressCount(Long ipAddressCount) {
        this.ipAddressCount = ipAddressCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModificationTime")
    public String modificationTime;
    public ResolverEndpoint withModificationTime(String modificationTime) {
        this.modificationTime = modificationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ResolverEndpoint withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroupIds")
    public String[] securityGroupIds;
    public ResolverEndpoint withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ResolverEndpointStatusEnum status;
    public ResolverEndpoint withStatus(ResolverEndpointStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StatusMessage")
    public String statusMessage;
    public ResolverEndpoint withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}