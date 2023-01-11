package openapisdk.models.shared;



/**
 * LoadBalancerDescription
 * Describes the details of a LoadBalancer.
**/
public class LoadBalancerDescription {
    public String domain;
    public LoadBalancerDescription withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    public Listener[] listeners;
    public LoadBalancerDescription withListeners(Listener[] listeners) {
        this.listeners = listeners;
        return this;
    }
    public String loadBalancerName;
    public LoadBalancerDescription withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
}