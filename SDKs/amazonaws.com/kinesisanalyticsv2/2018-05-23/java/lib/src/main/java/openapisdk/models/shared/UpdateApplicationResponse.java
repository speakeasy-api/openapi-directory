package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateApplicationResponse {
    @JsonProperty("ApplicationDetail")
    public ApplicationDetail applicationDetail;
    public UpdateApplicationResponse withApplicationDetail(ApplicationDetail applicationDetail) {
        this.applicationDetail = applicationDetail;
        return this;
    }
}