package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsElbLoadBalancerListenerDescription
 * Lists the policies that are enabled for a load balancer listener.
**/
public class AwsElbLoadBalancerListenerDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Listener")
    public AwsElbLoadBalancerListener listener;
    public AwsElbLoadBalancerListenerDescription withListener(AwsElbLoadBalancerListener listener) {
        this.listener = listener;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyNames")
    public String[] policyNames;
    public AwsElbLoadBalancerListenerDescription withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
}