package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListEnvironmentSecrets200ApplicationJson {
    @JsonProperty("secrets")
    public openapisdk.models.shared.ActionsSecret[] secrets;
    public ActionsListEnvironmentSecrets200ApplicationJson withSecrets(openapisdk.models.shared.ActionsSecret[] secrets) {
        this.secrets = secrets;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListEnvironmentSecrets200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}