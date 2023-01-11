package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody {
    @JsonProperty("email")
    public String email;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("visibility")
    public UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum visibility;
    public UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBody withVisibility(UsersSetPrimaryEmailVisibilityForAuthenticatedRequestBodyVisibilityEnum visibility) {
        this.visibility = visibility;
        return this;
    }
}