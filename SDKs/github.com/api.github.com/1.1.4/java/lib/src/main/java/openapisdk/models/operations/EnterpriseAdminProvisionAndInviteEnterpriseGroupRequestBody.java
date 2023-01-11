package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody {
    @JsonProperty("displayName")
    public String displayName;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers[] members;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody withMembers(EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
}