package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddFirewallRulesRequestBodyInboundRulesSources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public String[] addresses;
    public AddFirewallRulesRequestBodyInboundRulesSources withAddresses(String[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public AddFirewallRulesRequestBodyInboundRulesSources withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetes_ids")
    public String[] kubernetesIds;
    public AddFirewallRulesRequestBodyInboundRulesSources withKubernetesIds(String[] kubernetesIds) {
        this.kubernetesIds = kubernetesIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancer_uids")
    public String[] loadBalancerUids;
    public AddFirewallRulesRequestBodyInboundRulesSources withLoadBalancerUids(String[] loadBalancerUids) {
        this.loadBalancerUids = loadBalancerUids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, Object> tags;
    public AddFirewallRulesRequestBodyInboundRulesSources withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}