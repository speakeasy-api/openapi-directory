package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PipelineObject
 * Contains information about a pipeline object. This can be a logical, physical, or physical attempt pipeline object. The complete set of components of a pipeline defines the pipeline.
**/
public class PipelineObject {
    @JsonProperty("fields")
    public Field[] fields;
    public PipelineObject withFields(Field[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public PipelineObject withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PipelineObject withName(String name) {
        this.name = name;
        return this;
    }
}