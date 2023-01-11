package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateApiMappingRequestBody {
    @JsonProperty("apiId")
    public String apiId;
    public UpdateApiMappingRequestBody withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiMappingKey")
    public String apiMappingKey;
    public UpdateApiMappingRequestBody withApiMappingKey(String apiMappingKey) {
        this.apiMappingKey = apiMappingKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stage")
    public String stage;
    public UpdateApiMappingRequestBody withStage(String stage) {
        this.stage = stage;
        return this;
    }
}