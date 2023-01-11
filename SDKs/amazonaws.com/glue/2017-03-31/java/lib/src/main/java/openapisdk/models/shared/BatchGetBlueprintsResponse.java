package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetBlueprintsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Blueprints")
    public Blueprint[] blueprints;
    public BatchGetBlueprintsResponse withBlueprints(Blueprint[] blueprints) {
        this.blueprints = blueprints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MissingBlueprints")
    public String[] missingBlueprints;
    public BatchGetBlueprintsResponse withMissingBlueprints(String[] missingBlueprints) {
        this.missingBlueprints = missingBlueprints;
        return this;
    }
}