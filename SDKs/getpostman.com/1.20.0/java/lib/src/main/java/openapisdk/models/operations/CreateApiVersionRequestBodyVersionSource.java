package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiVersionRequestBodyVersionSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CreateApiVersionRequestBodyVersionSource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relations")
    public CreateApiVersionRequestBodyVersionSourceRelations relations;
    public CreateApiVersionRequestBodyVersionSource withRelations(CreateApiVersionRequestBodyVersionSourceRelations relations) {
        this.relations = relations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public Boolean schema;
    public CreateApiVersionRequestBodyVersionSource withSchema(Boolean schema) {
        this.schema = schema;
        return this;
    }
}