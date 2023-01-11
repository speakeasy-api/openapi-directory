package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiMappingRequestBody {
    @JsonProperty("apiId")
    public String apiId;
    public CreateApiMappingRequestBody withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apiMappingKey")
    public String apiMappingKey;
    public CreateApiMappingRequestBody withApiMappingKey(String apiMappingKey) {
        this.apiMappingKey = apiMappingKey;
        return this;
    }
    @JsonProperty("stage")
    public String stage;
    public CreateApiMappingRequestBody withStage(String stage) {
        this.stage = stage;
        return this;
    }
}