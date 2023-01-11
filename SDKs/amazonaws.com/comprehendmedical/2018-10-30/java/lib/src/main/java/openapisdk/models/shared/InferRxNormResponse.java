package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InferRxNormResponse {
    @JsonProperty("Entities")
    public RxNormEntity[] entities;
    public InferRxNormResponse withEntities(RxNormEntity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelVersion")
    public String modelVersion;
    public InferRxNormResponse withModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public InferRxNormResponse withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}