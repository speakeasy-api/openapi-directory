package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortOverride
 * <p>Override specific listener ports used to route traffic to endpoints that are part of an endpoint group. For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html"> Port overrides</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
**/
public class PortOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointPort")
    public Long endpointPort;
    public PortOverride withEndpointPort(Long endpointPort) {
        this.endpointPort = endpointPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ListenerPort")
    public Long listenerPort;
    public PortOverride withListenerPort(Long listenerPort) {
        this.listenerPort = listenerPort;
        return this;
    }
}