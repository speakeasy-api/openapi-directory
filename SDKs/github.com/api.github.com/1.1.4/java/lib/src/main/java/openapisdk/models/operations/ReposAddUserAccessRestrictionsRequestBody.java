package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposAddUserAccessRestrictionsRequestBody {
    @JsonProperty("users")
    public String[] users;
    public ReposAddUserAccessRestrictionsRequestBody withUsers(String[] users) {
        this.users = users;
        return this;
    }
}