package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLoadBalancerRequestBodyAssignDropletsByIdInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum algorithm;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withAlgorithm(CreateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_backend_keepalive")
    public Boolean enableBackendKeepalive;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withEnableBackendKeepalive(Boolean enableBackendKeepalive) {
        this.enableBackendKeepalive = enableBackendKeepalive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_proxy_protocol")
    public Boolean enableProxyProtocol;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withEnableProxyProtocol(Boolean enableProxyProtocol) {
        this.enableProxyProtocol = enableProxyProtocol;
        return this;
    }
    @JsonProperty("forwarding_rules")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[] forwardingRules;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withForwardingRules(CreateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[] forwardingRules) {
        this.forwardingRules = forwardingRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_check")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck healthCheck;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withHealthCheck(CreateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http_to_https")
    public Boolean redirectHttpToHttps;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withRedirectHttpToHttps(Boolean redirectHttpToHttps) {
        this.redirectHttpToHttps = redirectHttpToHttps;
        return this;
    }
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum size;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withSize(CreateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions stickySessions;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withStickySessions(CreateLoadBalancerRequestBodyAssignDropletsByIdStickySessions stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public CreateLoadBalancerRequestBodyAssignDropletsByIdInput withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}