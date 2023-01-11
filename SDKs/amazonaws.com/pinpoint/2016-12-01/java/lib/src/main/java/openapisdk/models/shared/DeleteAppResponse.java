package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAppResponse {
    @JsonProperty("ApplicationResponse")
    public ApplicationResponse applicationResponse;
    public DeleteAppResponse withApplicationResponse(ApplicationResponse applicationResponse) {
        this.applicationResponse = applicationResponse;
        return this;
    }
}