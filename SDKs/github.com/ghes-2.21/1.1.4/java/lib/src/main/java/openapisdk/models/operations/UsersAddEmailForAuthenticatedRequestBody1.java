package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersAddEmailForAuthenticatedRequestBody1 {
    @JsonProperty("emails")
    public String[] emails;
    public UsersAddEmailForAuthenticatedRequestBody1 withEmails(String[] emails) {
        this.emails = emails;
        return this;
    }
}