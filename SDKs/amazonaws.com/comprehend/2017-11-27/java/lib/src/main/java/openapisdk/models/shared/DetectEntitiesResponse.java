package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DetectEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Entities")
    public Entity[] entities;
    public DetectEntitiesResponse withEntities(Entity[] entities) {
        this.entities = entities;
        return this;
    }
}