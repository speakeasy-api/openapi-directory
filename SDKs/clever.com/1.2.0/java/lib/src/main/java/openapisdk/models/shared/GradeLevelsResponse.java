package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GradeLevelsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String[] data;
    public GradeLevelsResponse withData(String[] data) {
        this.data = data;
        return this;
    }
}