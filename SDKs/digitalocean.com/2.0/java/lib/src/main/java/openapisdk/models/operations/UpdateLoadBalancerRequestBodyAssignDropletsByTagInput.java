package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLoadBalancerRequestBodyAssignDropletsByTagInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum algorithm;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withAlgorithm(UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_backend_keepalive")
    public Boolean enableBackendKeepalive;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withEnableBackendKeepalive(Boolean enableBackendKeepalive) {
        this.enableBackendKeepalive = enableBackendKeepalive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_proxy_protocol")
    public Boolean enableProxyProtocol;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withEnableProxyProtocol(Boolean enableProxyProtocol) {
        this.enableProxyProtocol = enableProxyProtocol;
        return this;
    }
    @JsonProperty("forwarding_rules")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[] forwardingRules;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withForwardingRules(UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[] forwardingRules) {
        this.forwardingRules = forwardingRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_check")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck healthCheck;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withHealthCheck(UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http_to_https")
    public Boolean redirectHttpToHttps;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withRedirectHttpToHttps(Boolean redirectHttpToHttps) {
        this.redirectHttpToHttps = redirectHttpToHttps;
        return this;
    }
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum size;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withSize(UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions stickySessions;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withStickySessions(UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public UpdateLoadBalancerRequestBodyAssignDropletsByTagInput withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}