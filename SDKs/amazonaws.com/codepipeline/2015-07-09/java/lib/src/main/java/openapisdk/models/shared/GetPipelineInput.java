package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetPipelineInput
 * Represents the input of a <code>GetPipeline</code> action.
**/
public class GetPipelineInput {
    @JsonProperty("name")
    public String name;
    public GetPipelineInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public Long version;
    public GetPipelineInput withVersion(Long version) {
        this.version = version;
        return this;
    }
}