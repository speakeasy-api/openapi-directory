package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercialOwnerUserId")
    public String commercialOwnerUserId;
    public RegisterRequest withCommercialOwnerUserId(String commercialOwnerUserId) {
        this.commercialOwnerUserId = commercialOwnerUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cultureName")
    public String cultureName;
    public RegisterRequest withCultureName(String cultureName) {
        this.cultureName = cultureName;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public RegisterRequest withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public RegisterRequest withPassword(String password) {
        this.password = password;
        return this;
    }
}