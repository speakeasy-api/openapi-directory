package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetUserAccessRestrictionsRequestBody1 {
    @JsonProperty("users")
    public String[] users;
    public ReposSetUserAccessRestrictionsRequestBody1 withUsers(String[] users) {
        this.users = users;
        return this;
    }
}