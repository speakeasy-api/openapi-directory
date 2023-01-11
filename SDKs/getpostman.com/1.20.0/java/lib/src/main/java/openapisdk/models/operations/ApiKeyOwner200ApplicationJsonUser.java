package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKeyOwner200ApplicationJsonUser {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avatar")
    public String avatar;
    public ApiKeyOwner200ApplicationJsonUser withAvatar(String avatar) {
        this.avatar = avatar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ApiKeyOwner200ApplicationJsonUser withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fullName")
    public String fullName;
    public ApiKeyOwner200ApplicationJsonUser withFullName(String fullName) {
        this.fullName = fullName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ApiKeyOwner200ApplicationJsonUser withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPublic")
    public Boolean isPublic;
    public ApiKeyOwner200ApplicationJsonUser withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public ApiKeyOwner200ApplicationJsonUser withUsername(String username) {
        this.username = username;
        return this;
    }
}