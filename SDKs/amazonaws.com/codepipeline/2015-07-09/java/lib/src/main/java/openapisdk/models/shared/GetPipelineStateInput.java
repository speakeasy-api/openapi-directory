package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetPipelineStateInput
 * Represents the input of a <code>GetPipelineState</code> action.
**/
public class GetPipelineStateInput {
    @JsonProperty("name")
    public String name;
    public GetPipelineStateInput withName(String name) {
        this.name = name;
        return this;
    }
}