package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOrganizationAdminAccountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adminAccountId")
    public String adminAccountId;
    public GetOrganizationAdminAccountResponse withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationId")
    public String organizationId;
    public GetOrganizationAdminAccountResponse withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}