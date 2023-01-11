package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * LoadBalancer
 * Describes a load balancer.
**/
public class LoadBalancer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public LoadBalancer withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationOptions")
    public java.util.Map<String, String> configurationOptions;
    public LoadBalancer withConfigurationOptions(java.util.Map<String, String> configurationOptions) {
        this.configurationOptions = configurationOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public LoadBalancer withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dnsName")
    public String dnsName;
    public LoadBalancer withDnsName(String dnsName) {
        this.dnsName = dnsName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckPath")
    public String healthCheckPath;
    public LoadBalancer withHealthCheckPath(String healthCheckPath) {
        this.healthCheckPath = healthCheckPath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceHealthSummary")
    public InstanceHealthSummary[] instanceHealthSummary;
    public LoadBalancer withInstanceHealthSummary(InstanceHealthSummary[] instanceHealthSummary) {
        this.instanceHealthSummary = instanceHealthSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instancePort")
    public Long instancePort;
    public LoadBalancer withInstancePort(Long instancePort) {
        this.instancePort = instancePort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipAddressType")
    public IpAddressTypeEnum ipAddressType;
    public LoadBalancer withIpAddressType(IpAddressTypeEnum ipAddressType) {
        this.ipAddressType = ipAddressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;
    public LoadBalancer withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LoadBalancer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public LoadBalancerProtocolEnum protocol;
    public LoadBalancer withProtocol(LoadBalancerProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publicPorts")
    public Long[] publicPorts;
    public LoadBalancer withPublicPorts(Long[] publicPorts) {
        this.publicPorts = publicPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public LoadBalancer withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public LoadBalancerStateEnum state;
    public LoadBalancer withState(LoadBalancerStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public LoadBalancer withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public LoadBalancer withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tlsCertificateSummaries")
    public LoadBalancerTlsCertificateSummary[] tlsCertificateSummaries;
    public LoadBalancer withTlsCertificateSummaries(LoadBalancerTlsCertificateSummary[] tlsCertificateSummaries) {
        this.tlsCertificateSummaries = tlsCertificateSummaries;
        return this;
    }
}