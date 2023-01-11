package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAppResponse {
    @JsonProperty("ApplicationResponse")
    public ApplicationResponse applicationResponse;
    public GetAppResponse withApplicationResponse(ApplicationResponse applicationResponse) {
        this.applicationResponse = applicationResponse;
        return this;
    }
}