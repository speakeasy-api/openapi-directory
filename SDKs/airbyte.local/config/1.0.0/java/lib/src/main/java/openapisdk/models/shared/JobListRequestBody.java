package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class JobListRequestBody {
    @JsonProperty("configId")
    public String configId;
    public JobListRequestBody withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @JsonProperty("configTypes")
    public JobConfigTypeEnum[] configTypes;
    public JobListRequestBody withConfigTypes(JobConfigTypeEnum[] configTypes) {
        this.configTypes = configTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public Pagination pagination;
    public JobListRequestBody withPagination(Pagination pagination) {
        this.pagination = pagination;
        return this;
    }
}