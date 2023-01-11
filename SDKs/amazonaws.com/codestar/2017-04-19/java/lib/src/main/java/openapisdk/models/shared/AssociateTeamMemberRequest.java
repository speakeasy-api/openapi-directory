package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateTeamMemberRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public AssociateTeamMemberRequest withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("projectId")
    public String projectId;
    public AssociateTeamMemberRequest withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonProperty("projectRole")
    public String projectRole;
    public AssociateTeamMemberRequest withProjectRole(String projectRole) {
        this.projectRole = projectRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remoteAccessAllowed")
    public Boolean remoteAccessAllowed;
    public AssociateTeamMemberRequest withRemoteAccessAllowed(Boolean remoteAccessAllowed) {
        this.remoteAccessAllowed = remoteAccessAllowed;
        return this;
    }
    @JsonProperty("userArn")
    public String userArn;
    public AssociateTeamMemberRequest withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}