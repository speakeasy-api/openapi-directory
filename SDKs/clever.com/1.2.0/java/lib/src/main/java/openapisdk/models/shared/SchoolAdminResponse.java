package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SchoolAdminResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public SchoolAdmin data;
    public SchoolAdminResponse withData(SchoolAdmin data) {
        this.data = data;
        return this;
    }
}