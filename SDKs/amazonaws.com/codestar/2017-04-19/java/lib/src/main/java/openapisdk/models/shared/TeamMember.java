package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TeamMember
 * Information about a team member in a project.
**/
public class TeamMember {
    @JsonProperty("projectRole")
    public String projectRole;
    public TeamMember withProjectRole(String projectRole) {
        this.projectRole = projectRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccessAllowed")
    public Boolean remoteAccessAllowed;
    public TeamMember withRemoteAccessAllowed(Boolean remoteAccessAllowed) {
        this.remoteAccessAllowed = remoteAccessAllowed;
        return this;
    }
    @JsonProperty("userArn")
    public String userArn;
    public TeamMember withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}