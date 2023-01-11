package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateTeamMemberRequest {
    @JsonProperty("projectId")
    public String projectId;
    public DisassociateTeamMemberRequest withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonProperty("userArn")
    public String userArn;
    public DisassociateTeamMemberRequest withUserArn(String userArn) {
        this.userArn = userArn;
        return this;
    }
}