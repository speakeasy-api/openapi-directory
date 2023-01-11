package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAppResponse {
    @JsonProperty("ApplicationResponse")
    public ApplicationResponse applicationResponse;
    public CreateAppResponse withApplicationResponse(ApplicationResponse applicationResponse) {
        this.applicationResponse = applicationResponse;
        return this;
    }
}