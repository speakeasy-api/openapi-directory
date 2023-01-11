package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminCreateUserRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public EnterpriseAdminCreateUserRequestBody withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public EnterpriseAdminCreateUserRequestBody withLogin(String login) {
        this.login = login;
        return this;
    }
}