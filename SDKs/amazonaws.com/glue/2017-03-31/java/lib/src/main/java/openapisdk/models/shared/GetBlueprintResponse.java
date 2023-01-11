package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlueprintResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blueprint")
    public Blueprint blueprint;
    public GetBlueprintResponse withBlueprint(Blueprint blueprint) {
        this.blueprint = blueprint;
        return this;
    }
}