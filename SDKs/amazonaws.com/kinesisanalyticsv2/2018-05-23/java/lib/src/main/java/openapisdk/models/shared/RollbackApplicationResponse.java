package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RollbackApplicationResponse {
    @JsonProperty("ApplicationDetail")
    public ApplicationDetail applicationDetail;
    public RollbackApplicationResponse withApplicationDetail(ApplicationDetail applicationDetail) {
        this.applicationDetail = applicationDetail;
        return this;
    }
}