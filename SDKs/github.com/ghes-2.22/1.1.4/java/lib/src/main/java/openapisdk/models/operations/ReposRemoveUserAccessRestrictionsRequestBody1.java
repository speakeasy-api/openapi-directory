package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposRemoveUserAccessRestrictionsRequestBody1 {
    @JsonProperty("users")
    public String[] users;
    public ReposRemoveUserAccessRestrictionsRequestBody1 withUsers(String[] users) {
        this.users = users;
        return this;
    }
}