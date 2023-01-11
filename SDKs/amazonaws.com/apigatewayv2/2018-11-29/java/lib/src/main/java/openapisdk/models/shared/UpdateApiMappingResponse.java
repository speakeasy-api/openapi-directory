package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApiMappingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiId")
    public java.util.Map<String, Object> apiId;
    public UpdateApiMappingResponse withApiId(java.util.Map<String, Object> apiId) {
        this.apiId = apiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiMappingId")
    public java.util.Map<String, Object> apiMappingId;
    public UpdateApiMappingResponse withApiMappingId(java.util.Map<String, Object> apiMappingId) {
        this.apiMappingId = apiMappingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiMappingKey")
    public java.util.Map<String, Object> apiMappingKey;
    public UpdateApiMappingResponse withApiMappingKey(java.util.Map<String, Object> apiMappingKey) {
        this.apiMappingKey = apiMappingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Stage")
    public java.util.Map<String, Object> stage;
    public UpdateApiMappingResponse withStage(java.util.Map<String, Object> stage) {
        this.stage = stage;
        return this;
    }
}