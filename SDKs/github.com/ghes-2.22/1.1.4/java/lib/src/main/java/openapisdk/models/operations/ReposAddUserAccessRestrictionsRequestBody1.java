package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddUserAccessRestrictionsRequestBody1 {
    @JsonProperty("users")
    public String[] users;
    public ReposAddUserAccessRestrictionsRequestBody1 withUsers(String[] users) {
        this.users = users;
        return this;
    }
}