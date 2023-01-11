package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLoadBalancerRequestBodyAssignDropletsByIdInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum algorithm;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withAlgorithm(UpdateLoadBalancerRequestBodyAssignDropletsByIdAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_backend_keepalive")
    public Boolean enableBackendKeepalive;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withEnableBackendKeepalive(Boolean enableBackendKeepalive) {
        this.enableBackendKeepalive = enableBackendKeepalive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_proxy_protocol")
    public Boolean enableProxyProtocol;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withEnableProxyProtocol(Boolean enableProxyProtocol) {
        this.enableProxyProtocol = enableProxyProtocol;
        return this;
    }
    @JsonProperty("forwarding_rules")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[] forwardingRules;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withForwardingRules(UpdateLoadBalancerRequestBodyAssignDropletsByIdForwardingRules[] forwardingRules) {
        this.forwardingRules = forwardingRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_check")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck healthCheck;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withHealthCheck(UpdateLoadBalancerRequestBodyAssignDropletsByIdHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http_to_https")
    public Boolean redirectHttpToHttps;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withRedirectHttpToHttps(Boolean redirectHttpToHttps) {
        this.redirectHttpToHttps = redirectHttpToHttps;
        return this;
    }
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum size;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withSize(UpdateLoadBalancerRequestBodyAssignDropletsByIdSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions stickySessions;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withStickySessions(UpdateLoadBalancerRequestBodyAssignDropletsByIdStickySessions stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public UpdateLoadBalancerRequestBodyAssignDropletsByIdInput withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}