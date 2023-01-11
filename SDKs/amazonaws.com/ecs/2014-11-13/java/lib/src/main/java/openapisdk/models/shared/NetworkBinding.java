package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkBinding
 * Details on the network bindings between a container and its host container instance. After a task reaches the <code>RUNNING</code> status, manual and automatic host and container port assignments are visible in the <code>networkBindings</code> section of <a>DescribeTasks</a> API responses.
**/
public class NetworkBinding {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bindIP")
    public String bindIP;
    public NetworkBinding withBindIp(String bindIP) {
        this.bindIP = bindIP;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("containerPort")
    public Long containerPort;
    public NetworkBinding withContainerPort(Long containerPort) {
        this.containerPort = containerPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hostPort")
    public Long hostPort;
    public NetworkBinding withHostPort(Long hostPort) {
        this.hostPort = hostPort;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("protocol")
    public TransportProtocolEnum protocol;
    public NetworkBinding withProtocol(TransportProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
}