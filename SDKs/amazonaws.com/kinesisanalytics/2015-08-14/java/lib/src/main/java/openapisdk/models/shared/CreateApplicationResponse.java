package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateApplicationResponse
 * TBD
**/
public class CreateApplicationResponse {
    @JsonProperty("ApplicationSummary")
    public ApplicationSummary applicationSummary;
    public CreateApplicationResponse withApplicationSummary(ApplicationSummary applicationSummary) {
        this.applicationSummary = applicationSummary;
        return this;
    }
}