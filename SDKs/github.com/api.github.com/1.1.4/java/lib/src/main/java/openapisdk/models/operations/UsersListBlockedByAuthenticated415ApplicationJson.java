package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersListBlockedByAuthenticated415ApplicationJson {
    @JsonProperty("documentation_url")
    public String documentationUrl;
    public UsersListBlockedByAuthenticated415ApplicationJson withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public UsersListBlockedByAuthenticated415ApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
}