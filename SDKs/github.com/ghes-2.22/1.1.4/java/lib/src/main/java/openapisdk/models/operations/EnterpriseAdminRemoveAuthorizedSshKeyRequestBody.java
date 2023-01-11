package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnterpriseAdminRemoveAuthorizedSshKeyRequestBody {
    @JsonProperty("authorized_key")
    public String authorizedKey;
    public EnterpriseAdminRemoveAuthorizedSshKeyRequestBody withAuthorizedKey(String authorizedKey) {
        this.authorizedKey = authorizedKey;
        return this;
    }
}