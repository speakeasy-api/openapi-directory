package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnableOrganizationAdminAccountRequestBody {
    @JsonProperty("adminAccountId")
    public String adminAccountId;
    public EnableOrganizationAdminAccountRequestBody withAdminAccountId(String adminAccountId) {
        this.adminAccountId = adminAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public EnableOrganizationAdminAccountRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}