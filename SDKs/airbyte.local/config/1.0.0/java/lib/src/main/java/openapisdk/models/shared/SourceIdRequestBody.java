package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SourceIdRequestBody {
    @JsonProperty("sourceId")
    public String sourceId;
    public SourceIdRequestBody withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
}