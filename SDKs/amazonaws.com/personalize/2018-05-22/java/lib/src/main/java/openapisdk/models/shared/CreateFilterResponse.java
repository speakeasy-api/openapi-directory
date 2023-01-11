package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFilterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterArn")
    public String filterArn;
    public CreateFilterResponse withFilterArn(String filterArn) {
        this.filterArn = filterArn;
        return this;
    }
}