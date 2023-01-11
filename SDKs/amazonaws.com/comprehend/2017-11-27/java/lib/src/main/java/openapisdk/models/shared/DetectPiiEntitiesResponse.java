package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectPiiEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entities")
    public PiiEntity[] entities;
    public DetectPiiEntitiesResponse withEntities(PiiEntity[] entities) {
        this.entities = entities;
        return this;
    }
}