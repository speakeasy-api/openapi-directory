package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminAddAuthorizedSshKeyRequestBody {
    @JsonProperty("authorized_key")
    public String authorizedKey;
    public EnterpriseAdminAddAuthorizedSshKeyRequestBody withAuthorizedKey(String authorizedKey) {
        this.authorizedKey = authorizedKey;
        return this;
    }
}