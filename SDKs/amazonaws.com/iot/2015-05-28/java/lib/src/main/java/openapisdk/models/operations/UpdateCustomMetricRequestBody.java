package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateCustomMetricRequestBody {
    @JsonProperty("displayName")
    public String displayName;
    public UpdateCustomMetricRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}