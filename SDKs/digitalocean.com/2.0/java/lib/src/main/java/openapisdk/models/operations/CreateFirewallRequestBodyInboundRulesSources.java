package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFirewallRequestBodyInboundRulesSources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public String[] addresses;
    public CreateFirewallRequestBodyInboundRulesSources withAddresses(String[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public CreateFirewallRequestBodyInboundRulesSources withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetes_ids")
    public String[] kubernetesIds;
    public CreateFirewallRequestBodyInboundRulesSources withKubernetesIds(String[] kubernetesIds) {
        this.kubernetesIds = kubernetesIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancer_uids")
    public String[] loadBalancerUids;
    public CreateFirewallRequestBodyInboundRulesSources withLoadBalancerUids(String[] loadBalancerUids) {
        this.loadBalancerUids = loadBalancerUids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, Object> tags;
    public CreateFirewallRequestBodyInboundRulesSources withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}