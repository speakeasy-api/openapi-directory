package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addresses")
    public String[] addresses;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources withAddresses(String[] addresses) {
        this.addresses = addresses;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("droplet_ids")
    public Long[] dropletIds;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources withDropletIds(Long[] dropletIds) {
        this.dropletIds = dropletIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kubernetes_ids")
    public String[] kubernetesIds;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources withKubernetesIds(String[] kubernetesIds) {
        this.kubernetesIds = kubernetesIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("load_balancer_uids")
    public String[] loadBalancerUids;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources withLoadBalancerUids(String[] loadBalancerUids) {
        this.loadBalancerUids = loadBalancerUids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, Object> tags;
    public ListDropletFirewalls200ApplicationJsonFirewallsInboundRulesSources withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}