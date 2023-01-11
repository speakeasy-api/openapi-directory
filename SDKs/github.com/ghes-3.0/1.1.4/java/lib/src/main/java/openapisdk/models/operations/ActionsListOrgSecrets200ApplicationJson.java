package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListOrgSecrets200ApplicationJson {
    @JsonProperty("secrets")
    public openapisdk.models.shared.OrganizationActionsSecret[] secrets;
    public ActionsListOrgSecrets200ApplicationJson withSecrets(openapisdk.models.shared.OrganizationActionsSecret[] secrets) {
        this.secrets = secrets;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListOrgSecrets200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}