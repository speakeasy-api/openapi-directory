package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLoadBalancerRequestBodyAssignDropletsByTagInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("algorithm")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum algorithm;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withAlgorithm(CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum algorithm) {
        this.algorithm = algorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_backend_keepalive")
    public Boolean enableBackendKeepalive;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withEnableBackendKeepalive(Boolean enableBackendKeepalive) {
        this.enableBackendKeepalive = enableBackendKeepalive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enable_proxy_protocol")
    public Boolean enableProxyProtocol;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withEnableProxyProtocol(Boolean enableProxyProtocol) {
        this.enableProxyProtocol = enableProxyProtocol;
        return this;
    }
    @JsonProperty("forwarding_rules")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[] forwardingRules;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withForwardingRules(CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules[] forwardingRules) {
        this.forwardingRules = forwardingRules;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("health_check")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck healthCheck;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withHealthCheck(CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck healthCheck) {
        this.healthCheck = healthCheck;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("redirect_http_to_https")
    public Boolean redirectHttpToHttps;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withRedirectHttpToHttps(Boolean redirectHttpToHttps) {
        this.redirectHttpToHttps = redirectHttpToHttps;
        return this;
    }
    @JsonProperty("region")
    public openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withRegion(openapisdk.models.shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("size")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum size;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withSize(CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sticky_sessions")
    public CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions stickySessions;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withStickySessions(CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions stickySessions) {
        this.stickySessions = stickySessions;
        return this;
    }
    @JsonProperty("tag")
    public String tag;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withTag(String tag) {
        this.tag = tag;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vpc_uuid")
    public String vpcUuid;
    public CreateLoadBalancerRequestBodyAssignDropletsByTagInput withVpcUuid(String vpcUuid) {
        this.vpcUuid = vpcUuid;
        return this;
    }
}