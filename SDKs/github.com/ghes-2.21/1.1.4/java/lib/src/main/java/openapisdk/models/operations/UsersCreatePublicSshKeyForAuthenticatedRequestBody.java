package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UsersCreatePublicSshKeyForAuthenticatedRequestBody {
    @JsonProperty("key")
    public String key;
    public UsersCreatePublicSshKeyForAuthenticatedRequestBody withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public UsersCreatePublicSshKeyForAuthenticatedRequestBody withTitle(String title) {
        this.title = title;
        return this;
    }
}