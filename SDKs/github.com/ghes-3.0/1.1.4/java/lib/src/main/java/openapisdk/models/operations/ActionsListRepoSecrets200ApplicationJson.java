package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListRepoSecrets200ApplicationJson {
    @JsonProperty("secrets")
    public openapisdk.models.shared.ActionsSecret[] secrets;
    public ActionsListRepoSecrets200ApplicationJson withSecrets(openapisdk.models.shared.ActionsSecret[] secrets) {
        this.secrets = secrets;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListRepoSecrets200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}