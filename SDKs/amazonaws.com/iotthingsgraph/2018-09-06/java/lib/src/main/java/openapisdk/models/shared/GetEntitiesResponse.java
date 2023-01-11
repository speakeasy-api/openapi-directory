package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEntitiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("descriptions")
    public EntityDescription[] descriptions;
    public GetEntitiesResponse withDescriptions(EntityDescription[] descriptions) {
        this.descriptions = descriptions;
        return this;
    }
}