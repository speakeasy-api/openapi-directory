package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SchoolsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public SchoolResponse[] data;
    public SchoolsResponse withData(SchoolResponse[] data) {
        this.data = data;
        return this;
    }
}