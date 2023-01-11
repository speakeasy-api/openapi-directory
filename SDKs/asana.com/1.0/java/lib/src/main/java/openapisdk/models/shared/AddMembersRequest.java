package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AddMembersRequest {
    @JsonProperty("members")
    public String members;
    public AddMembersRequest withMembers(String members) {
        this.members = members;
        return this;
    }
}