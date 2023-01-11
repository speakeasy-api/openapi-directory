package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveUserAccessRestrictionsRequestBody {
    @JsonProperty("users")
    public String[] users;
    public ReposRemoveUserAccessRestrictionsRequestBody withUsers(String[] users) {
        this.users = users;
        return this;
    }
}