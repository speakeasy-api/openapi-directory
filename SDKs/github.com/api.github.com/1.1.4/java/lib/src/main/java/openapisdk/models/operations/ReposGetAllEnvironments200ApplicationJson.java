package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReposGetAllEnvironments200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environments")
    public openapisdk.models.shared.Environment[] environments;
    public ReposGetAllEnvironments200ApplicationJson withEnvironments(openapisdk.models.shared.Environment[] environments) {
        this.environments = environments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_count")
    public Long totalCount;
    public ReposGetAllEnvironments200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}