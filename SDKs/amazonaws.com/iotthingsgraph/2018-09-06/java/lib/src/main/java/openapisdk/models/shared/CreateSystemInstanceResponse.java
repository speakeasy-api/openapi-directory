package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSystemInstanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary")
    public SystemInstanceSummary summary;
    public CreateSystemInstanceResponse withSummary(SystemInstanceSummary summary) {
        this.summary = summary;
        return this;
    }
}