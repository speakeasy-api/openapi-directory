package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeregisterOrganizationAdminAccountRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminAccountId")
    public String adminAccountId;
    public DeregisterOrganizationAdminAccountRequestBody withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
}