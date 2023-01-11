package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VersionInfo
 * The Docker and Amazon ECS container agent version information about a container instance.
**/
public class VersionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentHash")
    public String agentHash;
    public VersionInfo withAgentHash(String agentHash) {
        this.agentHash = agentHash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agentVersion")
    public String agentVersion;
    public VersionInfo withAgentVersion(String agentVersion) {
        this.agentVersion = agentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dockerVersion")
    public String dockerVersion;
    public VersionInfo withDockerVersion(String dockerVersion) {
        this.dockerVersion = dockerVersion;
        return this;
    }
}