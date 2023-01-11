package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Server
 * Represents a server.
**/
public class Server {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationJobId")
    public String replicationJobId;
    public Server withReplicationJobId(String replicationJobId) {
        this.replicationJobId = replicationJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replicationJobTerminated")
    public Boolean replicationJobTerminated;
    public Server withReplicationJobTerminated(Boolean replicationJobTerminated) {
        this.replicationJobTerminated = replicationJobTerminated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverId")
    public String serverId;
    public Server withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverType")
    public ServerTypeEnum serverType;
    public Server withServerType(ServerTypeEnum serverType) {
        this.serverType = serverType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vmServer")
    public VmServer vmServer;
    public Server withVmServer(VmServer vmServer) {
        this.vmServer = vmServer;
        return this;
    }
}