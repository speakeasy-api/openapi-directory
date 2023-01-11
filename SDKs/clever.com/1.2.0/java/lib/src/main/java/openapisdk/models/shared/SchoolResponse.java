package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SchoolResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public School data;
    public SchoolResponse withData(School data) {
        this.data = data;
        return this;
    }
}