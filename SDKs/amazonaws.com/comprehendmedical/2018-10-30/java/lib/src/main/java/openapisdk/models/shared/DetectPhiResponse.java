package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectPhiResponse {
    @JsonProperty("Entities")
    public Entity[] entities;
    public DetectPhiResponse withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonProperty("ModelVersion")
    public String modelVersion;
    public DetectPhiResponse withModelVersion(String modelVersion) {
        this.modelVersion = modelVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PaginationToken")
    public String paginationToken;
    public DetectPhiResponse withPaginationToken(String paginationToken) {
        this.paginationToken = paginationToken;
        return this;
    }
}