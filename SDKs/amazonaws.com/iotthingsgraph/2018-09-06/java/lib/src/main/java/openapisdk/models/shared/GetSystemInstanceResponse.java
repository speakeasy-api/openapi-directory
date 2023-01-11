package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSystemInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public SystemInstanceDescription description;
    public GetSystemInstanceResponse withDescription(SystemInstanceDescription description) {
        this.description = description;
        return this;
    }
}