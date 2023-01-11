package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlueprintRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintRun")
    public BlueprintRun blueprintRun;
    public GetBlueprintRunResponse withBlueprintRun(BlueprintRun blueprintRun) {
        this.blueprintRun = blueprintRun;
        return this;
    }
}