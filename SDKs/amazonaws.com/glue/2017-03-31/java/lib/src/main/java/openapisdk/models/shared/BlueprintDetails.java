package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BlueprintDetails
 * The details of a blueprint.
**/
public class BlueprintDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintName")
    public String blueprintName;
    public BlueprintDetails withBlueprintName(String blueprintName) {
        this.blueprintName = blueprintName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunId")
    public String runId;
    public BlueprintDetails withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}