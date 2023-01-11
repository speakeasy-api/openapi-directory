package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBackendConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("backendManagerAppId")
    public String backendManagerAppId;
    public CreateBackendConfigRequestBody withBackendManagerAppId(String backendManagerAppId) {
        this.backendManagerAppId = backendManagerAppId;
        return this;
    }
}