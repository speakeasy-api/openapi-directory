package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public java.util.Map<String, Object> contentType;
    public CreateModelResponse withContentType(java.util.Map<String, Object> contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public CreateModelResponse withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelId")
    public java.util.Map<String, Object> modelId;
    public CreateModelResponse withModelId(java.util.Map<String, Object> modelId) {
        this.modelId = modelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public CreateModelResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schema")
    public java.util.Map<String, Object> schema;
    public CreateModelResponse withSchema(java.util.Map<String, Object> schema) {
        this.schema = schema;
        return this;
    }
}