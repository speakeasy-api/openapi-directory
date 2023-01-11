package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveMembersRequest {
    @JsonProperty("members")
    public String members;
    public RemoveMembersRequest withMembers(String members) {
        this.members = members;
        return this;
    }
}