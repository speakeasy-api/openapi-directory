package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBlueprintRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeBlueprint")
    public Boolean includeBlueprint;
    public GetBlueprintRequest withIncludeBlueprint(Boolean includeBlueprint) {
        this.includeBlueprint = includeBlueprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeParameterSpec")
    public Boolean includeParameterSpec;
    public GetBlueprintRequest withIncludeParameterSpec(Boolean includeParameterSpec) {
        this.includeParameterSpec = includeParameterSpec;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public GetBlueprintRequest withName(String name) {
        this.name = name;
        return this;
    }
}