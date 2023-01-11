package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UsersUpdateVerificationRequestBody {
    @JsonProperty("emailVerification")
    public Boolean emailVerification;
    public UsersUpdateVerificationRequestBody withEmailVerification(Boolean emailVerification) {
        this.emailVerification = emailVerification;
        return this;
    }
}