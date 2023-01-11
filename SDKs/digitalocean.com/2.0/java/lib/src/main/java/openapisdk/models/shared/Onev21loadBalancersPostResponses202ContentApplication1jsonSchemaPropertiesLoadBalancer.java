package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum algorithm;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withAlgorithm(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_backend_keepalive")
    public Boolean enableBackendKeepalive;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withEnableBackendKeepalive(Boolean enableBackendKeepalive) {
        this.enableBackendKeepalive = enableBackendKeepalive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_proxy_protocol")
    public Boolean enableProxyProtocol;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withEnableProxyProtocol(Boolean enableProxyProtocol) {
        this.enableProxyProtocol = enableProxyProtocol;
        return this;
    }
    @JsonProperty("forwarding_rules")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules[] forwardingRules;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withForwardingRules(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules[] forwardingRules) {
        this.forwardingRules = forwardingRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_check")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck healthCheck;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withHealthCheck(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip")
    public String ip;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withIp(String ip) {
        this.ip = ip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http_to_https")
    public Boolean redirectHttpToHttps;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withRedirectHttpToHttps(Boolean redirectHttpToHttps) {
        this.redirectHttpToHttps = redirectHttpToHttps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion region;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withRegion(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum size;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withSize(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum status;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withStatus(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions stickySessions;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withStickySessions(Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag")
    public String tag;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}