package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateApplicationResponse {
    @JsonProperty("ApplicationDetail")
    public ApplicationDetail applicationDetail;
    public CreateApplicationResponse withApplicationDetail(ApplicationDetail applicationDetail) {
        this.applicationDetail = applicationDetail;
        return this;
    }
}