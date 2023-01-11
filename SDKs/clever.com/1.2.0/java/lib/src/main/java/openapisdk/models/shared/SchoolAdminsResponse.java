package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SchoolAdminsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public SchoolAdminResponse[] data;
    public SchoolAdminsResponse withData(SchoolAdminResponse[] data) {
        this.data = data;
        return this;
    }
}