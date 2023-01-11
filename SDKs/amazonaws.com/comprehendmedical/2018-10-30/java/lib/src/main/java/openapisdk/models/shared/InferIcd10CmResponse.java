package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InferIcd10CmResponse {
    @JsonProperty("Entities")
    public Icd10CmEntity[] entities;
    public InferIcd10CmResponse withEntities(Icd10CmEntity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelVersion")
    public String modelVersion;
    public InferIcd10CmResponse withModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public InferIcd10CmResponse withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}