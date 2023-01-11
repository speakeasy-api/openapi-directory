package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateModelRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public String contentType;
    public CreateModelRequestBody withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateModelRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateModelRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("schema")
    public String schema;
    public CreateModelRequestBody withSchema(String schema) {
        this.schema = schema;
        return this;
    }
}