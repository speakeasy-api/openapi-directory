package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminCreateOrgRequestBody {
    @JsonProperty("admin")
    public String admin;
    public EnterpriseAdminCreateOrgRequestBody withAdmin(String admin) {
        this.admin = admin;
        return this;
    }
    @JsonProperty("login")
    public String login;
    public EnterpriseAdminCreateOrgRequestBody withLogin(String login) {
        this.login = login;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profile_name")
    public String profileName;
    public EnterpriseAdminCreateOrgRequestBody withProfileName(String profileName) {
        this.profileName = profileName;
        return this;
    }
}