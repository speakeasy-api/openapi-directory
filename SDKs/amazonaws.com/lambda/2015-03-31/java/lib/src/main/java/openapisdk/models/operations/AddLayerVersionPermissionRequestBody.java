package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddLayerVersionPermissionRequestBody {
    @JsonProperty("Action")
    public String action;
    public AddLayerVersionPermissionRequestBody withAction(String action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OrganizationId")
    public String organizationId;
    public AddLayerVersionPermissionRequestBody withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("Principal")
    public String principal;
    public AddLayerVersionPermissionRequestBody withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonProperty("StatementId")
    public String statementId;
    public AddLayerVersionPermissionRequestBody withStatementId(String statementId) {
        this.statementId = statementId;
        return this;
    }
}