package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineIdName
 * Contains the name and identifier of a pipeline.
**/
public class PipelineIdName {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PipelineIdName withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PipelineIdName withName(String name) {
        this.name = name;
        return this;
    }
}