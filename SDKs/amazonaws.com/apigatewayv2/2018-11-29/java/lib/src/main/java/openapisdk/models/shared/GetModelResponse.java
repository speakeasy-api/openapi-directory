package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetModelResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ContentType")
    public java.util.Map<String, Object> contentType;
    public GetModelResponse withContentType(java.util.Map<String, Object> contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public java.util.Map<String, Object> description;
    public GetModelResponse withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ModelId")
    public java.util.Map<String, Object> modelId;
    public GetModelResponse withModelId(java.util.Map<String, Object> modelId) {
        this.modelId = modelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public java.util.Map<String, Object> name;
    public GetModelResponse withName(java.util.Map<String, Object> name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schema")
    public java.util.Map<String, Object> schema;
    public GetModelResponse withSchema(java.util.Map<String, Object> schema) {
        this.schema = schema;
        return this;
    }
}