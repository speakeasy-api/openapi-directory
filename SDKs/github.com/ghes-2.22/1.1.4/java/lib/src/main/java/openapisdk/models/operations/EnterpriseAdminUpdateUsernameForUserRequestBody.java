package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminUpdateUsernameForUserRequestBody {
    @JsonProperty("login")
    public String login;
    public EnterpriseAdminUpdateUsernameForUserRequestBody withLogin(String login) {
        this.login = login;
        return this;
    }
}