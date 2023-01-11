package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBackendApiModelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Models")
    public java.util.Map<String, Object> models;
    public GetBackendApiModelsResponse withModels(java.util.Map<String, Object> models) {
        this.models = models;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public java.util.Map<String, Object> status;
    public GetBackendApiModelsResponse withStatus(java.util.Map<String, Object> status) {
        this.status = status;
        return this;
    }
}