package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineDescription
 * Contains pipeline metadata.
**/
public class PipelineDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PipelineDescription withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("fields")
    public Field[] fields;
    public PipelineDescription withFields(Field[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PipelineDescription withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pipelineId")
    public String pipelineId;
    public PipelineDescription withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public PipelineDescription withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}