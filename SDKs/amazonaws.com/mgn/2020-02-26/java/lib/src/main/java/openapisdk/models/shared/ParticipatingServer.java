package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParticipatingServer
 * Server participating in Job.
**/
public class ParticipatingServer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchStatus")
    public LaunchStatusEnum launchStatus;
    public ParticipatingServer withLaunchStatus(LaunchStatusEnum launchStatus) {
        this.launchStatus = launchStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public ParticipatingServer withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}