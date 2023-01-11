package openapisdk.models.shared;



/**
 * SourceIpConditionConfig
 * <p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p>
**/
public class SourceIpConditionConfig {
    public String[] values;
    public SourceIpConditionConfig withValues(String[] values) {
        this.values = values;
        return this;
    }
}