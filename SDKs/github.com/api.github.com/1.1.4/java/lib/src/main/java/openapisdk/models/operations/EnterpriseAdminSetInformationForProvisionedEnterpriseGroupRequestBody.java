package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody {
    @JsonProperty("displayName")
    public String displayName;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers[] members;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody withMembers(EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers[] members) {
        this.members = members;
        return this;
    }
    @JsonProperty("schemas")
    public String[] schemas;
    public EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody withSchemas(String[] schemas) {
        this.schemas = schemas;
        return this;
    }
}