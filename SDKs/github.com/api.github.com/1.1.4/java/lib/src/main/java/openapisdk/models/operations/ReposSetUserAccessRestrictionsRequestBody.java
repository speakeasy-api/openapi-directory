package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposSetUserAccessRestrictionsRequestBody {
    @JsonProperty("users")
    public String[] users;
    public ReposSetUserAccessRestrictionsRequestBody withUsers(String[] users) {
        this.users = users;
        return this;
    }
}