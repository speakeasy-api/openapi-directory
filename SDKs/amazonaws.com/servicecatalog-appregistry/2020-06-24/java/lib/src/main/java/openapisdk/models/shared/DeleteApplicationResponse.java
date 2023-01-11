package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteApplicationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application")
    public ApplicationSummary application;
    public DeleteApplicationResponse withApplication(ApplicationSummary application) {
        this.application = application;
        return this;
    }
}