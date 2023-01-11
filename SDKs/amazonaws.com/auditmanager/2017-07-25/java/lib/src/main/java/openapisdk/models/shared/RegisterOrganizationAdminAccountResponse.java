package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegisterOrganizationAdminAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminAccountId")
    public String adminAccountId;
    public RegisterOrganizationAdminAccountResponse withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public RegisterOrganizationAdminAccountResponse withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}