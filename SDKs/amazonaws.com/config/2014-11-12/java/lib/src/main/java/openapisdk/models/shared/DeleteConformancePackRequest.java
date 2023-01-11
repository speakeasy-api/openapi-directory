package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteConformancePackRequest {
    @JsonProperty("ConformancePackName")
    public String conformancePackName;
    public DeleteConformancePackRequest withConformancePackName(String conformancePackName) {
        this.conformancePackName = conformancePackName;
        return this;
    }
}